var express= require("express");
var aplicación=express();

aplicación.get("/", inicio);
aplicación.get("/cursos", cursos);

function inicio (peticion , resultado)
{
    resultado.send ("Este es el home");
}

function cursos (peticion , resultado)
{
    resultado.send ("Estos son los cursos");
}

aplicación.listen(8989);