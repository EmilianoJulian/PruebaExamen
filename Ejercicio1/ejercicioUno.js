/**
 * Aqui dentro probar el codigo que quieran
 */
function probarEjercicio()
{
	var cosaAnimal;
	// gato
	// perro
	// otro
	var pelaje;
	// corto;
	// largo;
	// sinPelo;
	var edad;
	// edad;
	var nombreAnimal;
	// nombre;
	var raza;
	//raza del animal
	var peso;
	//peso del animal
	var estadoClinico;
	// enfermo
	// internado
	// adoptado
	var temperaturaCorporal;
	// A
	var MaxPesoPerro;
	var nombreMaxPesoPerro;
	var flagMaxPesoPerro=true;
	//B
	var contadorMasCotas=0;
	var contadorMasCotasEnfermas=0;
	var porsentajeMascotasEnfermas;
	//C
	var nombreUltimaMascotaTipoOtro
	//D
	var menorTemperatura;
	var cosaAnimalSinPeloMenorTemperatura;
	var flagCosaAnimalSinPeloMenorTemperatura=true;
	//E
	var promedioMaxTemperaturaGatos;
	var promedioMaxTemperaturaPerros;
	var promedioMaxTemperaturaOtro;
	var contadorGatos=0;
	var contadorPerro=0;
	var contadorOtro=0;
	var acumuladorTemperaturaGatos=0;
	var acumuladorTemperaturaPerros=0;
	var acumuladorTemperaturaOtro=0;
	var promedioMayorTemperaturaCorporal;
	//F
	var gatoMasPerro;
	var acumuladorGatosPerros=0;
	var porsentajeGatosPerros;
	//G
	var contadorEnfermo=0;
	var contadorInternado=0;
	var contadorAdoptado=0;
	var estadoClinicoMenor;
	//H
	var contadorPesoDeTodasMascotas=0;
	var promedioPesoTodasMascotas;
	//I
	var minPesoGato;
	var nombreGatoMasLiviano;
	var razaGatoMasLiviano;
	var flagMinPesoGato=true;
	//Fin
 	var continuar;
	do
	{
		cosaAnimal=prompt("Ingrese el animal: (gato/perro/otro) ");
		while(cosaAnimal!="gato"&&cosaAnimal!="perro"&&cosaAnimal!="otro")
		{
			cosaAnimal=prompt("El animal que ingreso no es valido. Ingrese el animal: (gato/perro/otro) ");
		}

		pelaje=prompt("Ingrese el pelaje: (corto/largo/sin pelo)");
		while(pelaje!="corto"&&pelaje!="largo"&&pelaje!="sin pelo")
		{
			pelaje=prompt("El pelaje que ingreso no es valido. Ingrese el pelaje: (corto/largo/sin pelo)");
		}

		edad=prompt("Ingrese la edad del animal.");
		edad=parseInt(edad);
		while (edad>0)
		{
			edad=prompt("La edad que ingreso no es valida. Ingrese la edad del animal.");
			edad=parseInt(edad);
		}

		nombreAnimal=prompt("Ingrese el nombre del animal.");
		while (nombreAnimal==" ")
		{
			nombreAnimal=prompt("El nombre que ingreso no es valido. Ingrese el nombre del animal.");
		}

		raza= prompt("Ingrese la raza de su animal.");
		while (raza==" ")
		{
			raza= prompt("La raza que usted ingreso no es valida. Ingrese la raza de su animal.");
		}

		peso= prompt("Ingrese el peso de su animal");
		while(isNaN(peso))
		{
			peso= prompt("El peso que usted ingres no es valido. Ingrese el peso de su animal");
		}

		estadoClinico=prompt("Ingrese estado clinico de su animal: (enfermo/internado/adoptado)");
		while(estadoClinico!="enfermo"&&estadoClinico!="internado"&&estadoClinico!="adoptado")
		{
			estadoClinico=prompt("El estado clinico que ingreso no es valido. Ingrese estado clinico de su animal: (enfermo/internado/adoptado)");
		}

		temperaturaCorporal=prompt("Ingrese la temperatura corporal de su animal: (Entre 10 y 40)");
		temperaturaCorporal=parseInt(temperaturaCorporal)
		while(!(temperaturaCorporal>10&&temperaturaCorporal<40))
		{
			temperaturaCorporal=prompt("La temperatura corporal que ingreso no es valida. Ingrese la temperatura corporal de su animal: (Entre 10 y 40)");
		}
		//A
		if (flagMaxPesoPerro=true)
		{
			MaxPesoPerro=peso;
			nombreMaxPesoPerro=nombre;
			flagMaxPesoPerro=false;
		}
		else if (peso>MaxPesoPerro&&cosaAnimal=="perro")
		{
			MaxPesoPerro=peso;
			nombreMaxPesoPerro=nombre;
		}
		//B
		contadorMasCotas++;
		if (estadoClinico=="enfermo")
		{
			contadorMasCotasEnfermas++
		}
		porsentajeMascotasEnfermas=contadorMasCotas*100/contadorMasCotasEnfermas;

		//C
		nombreUltimaMascotaTipoOtro=otro;
		//D
		if (flagCosaAnimalSinPeloMenorTemperatura==true)
		{
			menorTemperatura=temperaturaCorporal;
			cosaAnimalSinPeloMenorTemperatura=cosaAnimal;
			flagCosaAnimalSinPeloMenorTemperatura=false;
		}
		else if (temperaturaCorporal<menorTemperatura)
		{
			menorTemperatura=temperaturaCorporal;
			cosaAnimalSinPeloMenorTemperatura=cosaAnimal;
		}
		//E
		if (cosaAnimal=="gato")
		{
		contadorGatos++;
		acumuladorTemperaturaGatos=acumuladorTemperaturaGatos+temperaturaCorporal;
		promedioMaxTemperaturaGatos=contadorgatos/acumuladorTemperaturaGatos;
		}
		else if (cosaAnimal=="perro")
		{
		contadorPerro++;
		acumuladorTemperaturaPerros=acumuladorTemperaturaPerros+temperaturaCorporal;
		promedioMaxTemperaturaPerros=contadorPerro/acumuladorTemperaturaPerros;
		}
		else if (cosaAnimal=="otro")
		{
		contadorOtro++;
		acumuladorTemperaturaOtro=acumuladorTemperaturaOtro+temperaturaCorporal;
		promedioMaxTemperaturaOtro=contadorOtro/acumuladorTemperaturaOtro;
		}
		//F
		acumuladorGatosPerros=contadorgatos+contadorPerro;
		porsentajeGatosPerros=acumuladorGatosPerros*100/contadorMasCotas;
		//G
		if (estadoClinico=="enfermo")
		{
			contadorEnfermo++;
		}
		if else (estadoClinico=="internado")
		{
			contadorInternado++;
		}
		if else(estadoClinico=="adoptado")
		{
			contadorAdoptado++
		}

		//H
		contadorPesoDeTodasMascotas=contadorPesoDeTodasMascotas+peso;
		promedioPesoTodasMascotas=contadorPesoDeTodasMascotas/contadorMasCotas;
		//I
		if (flagMinPesoGato=true)
		{
			minPesoGato=peso;
			nombreGatoMasLiviano=nombre;
			razaGatoMasLiviano=raza;
			flagMinPesoGato=false;
		}
		else if (peso<minPesoGato&&cosaAnimal=="gato")
		{
			minPesoGato=peso;
			nombreGatoMasLiviano=nombre;
			razaGatoMasLiviano=raza;
		}
		continuar=confirm("Desea ingresar otra mascota?")
	}while(continiar)
	//E
	if (promedioMaxTemperaturaPerros<promedioMaxTemperaturaGatos)
	{
		if (promedioMaxTemperaturaGatos>promedioMaxTemperaturaOtro)
		{
			promedioMayorTemperaturaCorporal=promedioMaxTemperaturaGatos;
		}
		else
		{
			promedioMayorTemperaturaCorporal=promedioMaxTemperaturaOtro;
		}
	}
	else 
	{
		if (promedioMaxTemperaturaPerros>promedioMaxTemperaturaOtro)
		{
			promedioMayorTemperaturaCorporal=promedioMaxTemperaturaPerros;
		}
		else
		{
			promedioMayorTemperaturaCorporal=promedioMaxTemperaturaOtro;
		}
	}
	//G
	if (contadorEnfermo<contadorInternado)
	{
		if (contadorEnfermo>contadorAdoptado)
		{
			estadoClinicoMenor=contadorAdoptado;
		}
		else
		{
			estadoClinicoMenor=contadorEnfermo;
		}
	}
	else
	{
		if (contadorInternado>contadorAdoptado)
		{
			estadoClinicoMenor=contadorAdoptado;
		}
		else
		{
			estadoClinicoMenor=contadorInternado;
		}
	}
	// FIN
	//A
	document.write("El perro mas pesado es: "+ nombreMaxPesoPerro);
	//B
	document.write("El porcentaje de enfermos sobre el total de mascotas es: "+porsentajeMascotasEnfermas);
	//C
	document.write("El nombre de la ultima mascota de tipo 'otra cosa' es: "+nombreUltimaMascotaTipoOtro);
	//D
	document.write("El animal sin pelo con menor temperatura corporal es: "+cosaAnimalSinPeloMenorTemperatura);
	//E
	document.write("El tipo de mascota que tiene el mayor promedio de temperatura corporal es: "+promedioMayorTemperaturaCorporal);
	//F
	document.write("Sumando gatos y perros el porcentaje del total de mascota es: "+porsentajeGatosPerros);
	//G
	document.write("El estado clinico que tiene la menor cantidad de mascotas es: "+estadoClinicoMenor);
	//H
	document.write("El promedio de peso de todas las mascotas es: "+promedioPesoTodasMascotas );
	//I
	document.write("El nombre del gato mas liviano es: "+nombreGatoMasLiviano+" y su raza es "+razaGatoMasLiviano );
}