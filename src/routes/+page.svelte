<head>
    <title>Grunnstoffspeideren</title>
</head>

<div id="overskrift">
    <h1>Grunnstoffspeideren</h1>
</div>

<div id="top">
    <p>SØK:</p>
    <input type="text" placeholder="2, He, Helium...">
    <button>(?)</button>
</div>

<div id="mid">
    <div id="elbox">
        
        <div id="atomnum">
            <p>3</p>
        </div>

        <div id="masse">
            <p>6.941</p>
        </div>
        
        <div id="symbol">
            <p>Li</p>
        </div>

        <div id="navn">
            <p>Litium</p>
        </div>

    </div>

    <div id="info">
        <ul>
            <li>GRUPPE: 18 →</li>
            <li>PERIODE: 1 ↓</li>
            <br>
            <li>ST. TILSTAND: GASS</li>
            <li>IKKE-METALL</li>
            
            <br>
            <li>WIKIPEDIA: <a href="https://no.wikipedia.org/wiki/Litium">no.wikipedia.org/wiki/Litium</a></li>
            <li>SNL: <a href="https://snl.no/litium">snl.no/litium</a></li>
        </ul>
    </div>
</div>


<script>
    export let data;

    console.log(data.grs)
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

        background-color: lightblue;
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
    }
    #navn{
        position: absolute;
        bottom: 0%;
        left: 50%;
        transform: translate(-50%, 0%);
    }

</style>


