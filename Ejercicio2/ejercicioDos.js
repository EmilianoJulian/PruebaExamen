/**
 * Aqui dentro probar el codigo que quieran
 */
function probarEjercicio()
{
	var continente;
	//america-asia-europa-africa-oceania;
	var nombrePais;
	//validar si es string
	var cantidadHabitantesEnMillones;
	//entre 1 y 7000
	var nivelPobresa
	//pobre-rico-muy rico
	var temperatura
	//entre -50 y 50

	for(var i=0;i<5;i++)
	{
		continente=prompt("Ingrese un continente");
		while(continente!="america"&&continente!="asia"&&continente!="europa"&&continente!="africa"&&continente!="oceania")
		{
			continente=prompt("El continente que ingreso no es valido. Ingrese un continente");
		}

		nombrePais=prompt("Ingrese un pais");
		while(nombrePais==" ")
		{
			nombrePais=prompt("El pais que ingreso no es valido. Ingrese un pais");
		}

		cantidadHabitantesEnMillones=prompt("Ingrese la cantidad de habitantes del pais.(En millones)");
		paeseInt(cantidadHabitantesEnMillones);
		while(cantidadHabitantesEnMillones<1&&cantidadHabitantesEnMillones>7000)
		{
			cantidadHabitantesEnMillones=prompt("La cantidad de habitantes que ingreso no es valida. Ingrese la cantidad de habitantes del pais.(En millones)");
			paeseInt(cantidadHabitantesEnMillones);
		}

		nivelPobresa=prompt("Ingrese el nivel de pobresa del pais.(pobre-rico-muy rico)");
		while(nivelPobresa!="pobre"&&nivelPobresa!="rico"&&nivelPobresa!="muy rico")
			{
				nivelPobresa=prompt("El nivel de pobresa ingresado no es valido. Ingrese el nivel de pobresa del pais.(pobre-rico-muy rico)");
			}

		temperatura=prompt("Ingrese la temperatura del pais.(Entre '-50' y '50'");
		while(temperatura<-50&&temperatura>50)
		{
			temperatura=prompt("La temperatura que ingreso no es valida. Ingrese la temperatura del pais.(Entre '-50' y '50'");
		}
	}
}