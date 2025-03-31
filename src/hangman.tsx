const HEAD=(
    <div style={{
        border:"10px solid black",
        height:"50px",
        width:"50px",
        borderRadius:"100%",
        position:"absolute",
        top :"50px" ,
        right: "-30px",     
    }}></div>
)
const BODY=(
    <div style={{
        height:"100px",
        width:"10px",
        position:"absolute",
        top:"120px",
        backgroundColor:"black",
        right:"0",
    }}></div>
)
const Rhand=(
    <div style={{
        height:"10px",
        width:"100px",
        position:"absolute",
        top:"150px",
        backgroundColor:"black",
        right:"-100px",
        rotate:"-30deg",
        transformOrigin:"left bottom"
    }}></div>
)
const Lhand=(
    <div style={{
        height:"10px",
        width:"100px",
        position:"absolute",
        top:"150px",
        backgroundColor:"black",
        right:"10px",
        rotate:"30deg",
        transformOrigin:"right bottom"
    }}></div>
)
const Rleg=(
    <div style={{
        height:"10px",
        width:"100px",
        position:"absolute",
        top:"210px",
        backgroundColor:"black",
        right:"-100px",
        rotate:"60deg",
        transformOrigin:"left top "
    }}></div>
)
const Lleg=(
    <div style={{
        height:"10px",
        width:"100px",
        position:"absolute",
        top:"210px",
        backgroundColor:"black",
        right:"10px",
        rotate:"-60deg" ,
        transformOrigin:"right top "
    }}></div>
)

const bodyParts=[HEAD , BODY , Lhand , Rhand , Lleg , Rleg]
type hangmanProps={
     errorLen:number;
}



export function Hangman1({errorLen}:hangmanProps){
    return (
        <div style={{
            position:"relative"
        }}>
            {
                bodyParts.slice(0,errorLen)
            }
            <div style={{
               height:"50px",
               width:"10px",
               backgroundColor:"black",
               position:"absolute",
                top:0 ,
                right: 0,
            }} />
            
            
            
            <div style={{
                height:"10px",
                width:"200px",
                backgroundColor:"black",
                marginLeft:"120px"

            }} />
            
            
            <div style={{
                height:"400px",
                width:"10px",
                backgroundColor:"black",
                marginLeft:"120px"
            
            }} />
            <div style={{
               height:"10px",
               width:"250px",
               backgroundColor:"black"
            }} />
            


        </div>
        )
}