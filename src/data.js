export const API_KEY="AIzaSyAUtiFNHoY9vrqCJ8i0lZA6rf7m-2WGdNU"

export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }
}