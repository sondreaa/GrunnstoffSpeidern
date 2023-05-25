<head>
    <title>Grunnstoffspeideren</title>
</head>

<div id="overskrift">
    <h1>Grunnstoffspeideren</h1>
</div>
    


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

<style>
    /* div{
        border: 1px solid red;
    } */
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




<script>
    export let data;

    console.log(data.periodesystem)
</script>
