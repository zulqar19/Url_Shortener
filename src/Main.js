import './Main.css';
import axios from 'axios';
function Main(){

    function copy() {
        let text = document.getElementById('output').innerHTML;
        if(text === ""){
            alert ("nothing to copy");
        }else{
        navigator.clipboard.writeText(text);
        alert('URL copied');
        }
    }
    
    function shortenUrl(){
        let url = document.querySelector('#text').value;
        if(url === ""){
            alert("Please pass something")
        }else{
        axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`).then((response) => {
            let shortUrl =response.data.result.full_short_link;
            document.getElementById('output').innerHTML = shortUrl;
        
        })}
    }

    return(
        <div className="main">
            <input type="text" id="text"></input>
            <div className="buttons">
                <button className='btn' onClick={shortenUrl}>SHORTEN URL</button>
                <button className='btn' onClick={copy}>COPY TO CLIPBOARD</button>
            </div>
            <div id="output"></div>
            <footer className="footer">URL SHORTENER is a free for shorten a URL or reduce a link Use our URL shortener to create a shortened link making it easy to remenber</footer>
        </div>
    )
}

export default Main;