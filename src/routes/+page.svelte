<head>
    <title>Grunnstoffspeideren</title>
</head>

<div id="overskrift">
    <h1>Grunnstoffspeideren</h1>
</div>

<div id="top">
    <p>SØK:</p>
    <input type="text" placeholder="1, H, Hydrogen..." bind:value={search} on:input={searchupdate}>
    <button type="button" on:click={info}>
        (?)
    </button>
</div>
  

<div id="mid">
    <div id="elbox" style="--theme-color: {bgcolor}">
        
        <div id="atomnum">
            <p>{atomnummer}</p>
        </div>

        <div id="masse">
            <p>{masse}</p>
        </div>
        
        <div id="symbol" style="--theme-color: {txtcolor}">
            <p>{symbol}</p>
        </div>

        <div id="navn">
            <p>{navn}</p>
        </div>

    </div>

    <div id="info">
        <ul>
            <li>GRUPPE: {gruppe} →</li>
            <li>PERIODE: {periode} ↓</li>
            <br>
            <li>ST. TILSTAND: {calc_standardtilstand}</li>
            <li>{calc_metall}</li>
            
            <br>
            <li>WIKIPEDIA: <a href={wikipedia}>no.wikipedia.org/wiki/{navn}</a></li>
            <li>SNL: <a href={snl}>snl.no/{navn}</a></li>
        </ul>
    </div>
</div>


<script>
    export let data;

    console.log(data.grs)
    // for (let i = 0; i < data.grs.length; i++) {
    //     console.log(data.grs[i].atomnummer)
  
    //     if (i+1 == data.grs[i].atomnummer){
    //         console.log("ok")
    //     }
    // }

    //setter alle "startverdiene" inn på riktig sted
    let symbol = data.grs[0].symbol
    let atomnummer = data.grs[0].atomnummer
    let masse = data.grs[0].vekt
    let navn = data.grs[0].navn

    let gruppe = data.grs[0].gruppe
    let periode = data.grs[0].periode

    let standardtilstand = data.grs[0].standardtilstand
    let calc_standardtilstand = "GASS"
    let txtcolor = "#FF0000"

    let metall = data.grs[0].metall
    let calc_metall = "IKKE-METALL"
    let bgcolor = "#ffc6c4"

    let wikipedia = "https://no.wikipedia.org/wiki/"+data.grs[0].navn
    let snl = "https://snl.no/"+data.grs[0].navn

    //oppdaterer alle verdiene til å samsvare med en index fra API
    function updateall(index){
        symbol = data.grs[index].symbol
        atomnummer = data.grs[index].atomnummer
        masse = data.grs[index].vekt
        navn = data.grs[index].navn

        gruppe = data.grs[index].gruppe
        periode = data.grs[index].periode

        standardtilstand = data.grs[index].standardtilstand
        if (standardtilstand == "gas"){
            calc_standardtilstand = "GASS"
            txtcolor = "#FF0000"
        }else if (standardtilstand == "liq"){
            calc_standardtilstand = "FLYTENDE"
            txtcolor = "#0000FF"
        }else{
            calc_standardtilstand = "FAST STOFF"
            txtcolor = "#000000"
        }

        metall = data.grs[index].metall
        if (metall == "metall"){
            calc_metall = "METALL"
            bgcolor = "#add8e6"
        }else if (metall == "half"){
            calc_metall = "HALVMETALL"
            bgcolor = "#c8ee90"
        }else{
            calc_metall = "IKKE-METALL"
            bgcolor = "#ffc6c4"
        }

        wikipedia = "https://no.wikipedia.org/wiki/"+data.grs[index].navn
        snl = "https://snl.no/"+data.grs[index].navn
    }
    function containsOnlyNumbers(str) {
        return /^\d+$/.test(str);
    }
    let search = ""

    function searchupdate(){
        if (containsOnlyNumbers(search)){
            let num = parseInt(search)
            if (num <= 118){
                updateall(num-1)
            }
        } else if (search.length <= 2){
            for (let i = 0; i < data.grs.length; i++) {
                
  
                if (search.toLowerCase() == data.grs[i].symbol.toLowerCase()){
                    updateall(i)
                }   
            }
        } else if (search.length > 2){
            for (let i = 0; i < data.grs.length; i++) {
                
  
                if (data.grs[i].navn.toLowerCase().includes(search.toLowerCase())){
                    updateall(i)
                }   
            }
        } else{
            updateall[0]
        }
        



    }
    
    function info() {
        alert("Skriv inn enten navn, symbol eller atomnummer i søkefeltet.");
    }
</script>


<style>
    /* div{
        border: 1px solid red;
    } */
    #top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 30px;
        width: 230px;
    }
    #mid{
        display: flex;
        align-items: center;
    }
    #elbox{
        width: 150px;
        height: 160px;
        position: relative;
        border: 3px solid black;

        background-color: var(--theme-color);;
    }
    #atomnum{
        position: absolute;
        left: 5%;
        font-size: 200%;
        transform: translate(0%, -30%);
    }
    #masse{
        position: absolute;
        right: 5%;
        transform: translate(0%, -15%);
    }
    #symbol{
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;

        font-size: 350%;
        color: var(--theme-color);
    }
    #navn{
        position: absolute;
        bottom: 0%;
        left: 50%;
        transform: translate(-50%, 0%);
    }

</style>


