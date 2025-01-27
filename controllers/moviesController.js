import db_connection from "../database.js";

function index(req,res){
    const sql= "SELECT * FROM db_movies.movies;"
    
    db_connection.query(sql,(err,results) =>{
        if(err){
            return res.status(500).json({error: "Query fail"})
        }
        res.json(results)
    })
}

function show(req,res){
    const id=parseInt(req.params.id);
    const sql = "SELECT * FROM db_movies.reviews JOIN  `movies`ON `reviews`.`movie_id`= `movies`.`id` WHERE `movies`.`id` = ?";
    console.log(sql, "id singolo")

    db_connection.query(sql,[id], (err,results) =>{
        if (err){
            return res.status(500).json({error: "Query fail"}) 
        }
        
        const movie = { ...results[0] }; 
        movie.reviews = results.map(review => ({
            id: review.id,
            name: review.name,
            text: review.text,
            created_at: review.created_at,
            vote: review.vote
        }));

        if(!movie){
            return res.status(404).json({error: "L'elemento non esiste"})
        }
        res.json(movie);
    }) 

}
export {index,show};    