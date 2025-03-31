type checkprops={
    guessedletters:string ;
    wordtoguess:string ;
}
export function Check1({guessedletters,wordtoguess}:checkprops){
  
    return (
        <div style={{
            display:"flex",
            gap:"0.25em",
            fontSize:"6rem",
            fontWeight:"bold",
            textTransform:"uppercase",
            fontFamily:"monospace",
        }}>
        {wordtoguess.split("").map((letter , index) => (
            <span style={{borderBottom:".1em solid black" }} key={index} >
                <span style={{
                    visibility:guessedletters.includes(letter)
                    ?"visible"
                    :"hidden" , 
                }}>
                    {letter}
            </span>
            
            </span>
        ))}
        </div>
        )
}