const fs = require('fs');

// Arreglos con los valores para el campo "N" y "pref"
const nombres = [
 
  "FORERO  PEÑALOZA FLOR PATRICIA", 
  "RODRIGUEZ  MORENO SAMUEL ", 
  "CHAVEZ  BERNAL JESSICA FERNANDA", 
  "VALBUENA  REYES YULIETH ", 
  "VELA  DE CESPEDES EVA ", 
  "TORRES  BARACALDO CIRO ALFONSO", 
  "DUQUE  CORTES ANDREA YANIRYS", 
  "MONTENEGRO  HERNANDEZ SANDRA MILENA", 
  "RODRIGUEZ  RIVERA LUIS HERNANDO", 
  "GAVIRIA  ECHEVERRY MARIA VIVIANA", 
  "MARROQUIN   CARMEN ", 
  "BENAVIDES   ANGEL ALDEMAR", 
  "SANDOVAL  NAVARRO VIVIANA ", 
  "GALINDO  SOTELO CARLOS ", 
  "BARRIOS   ALVARO ", 
  "GALINDO  BORDA KAROL LIZETH", 
  "ALVARADO  CUBILLOS DORA CARMENZA", 
  "BUITRAGO  RICO IBETTE LIZANA", 
  "PARDO  PENAGOS VICTOR JULIO", 
  "LEURO  ROMERO ROSA ELENA", 
  "ESCOBAR  CRUZ ONOFRE ", 
  "ROJAS  LOPEZ ROSA HERMINDA", 
  "VARELA DE  QUINTERO ISABEL ", 
  "GARZON  PUIN YEIMY LICETH", 
  "LANCHEROS  LANCHEROS MAGZARY ", 
  "GALINDO  BORDA KAROL LIZETH", 
  "GOMEZ  CORDOBA DANIELA ", 
  "RIVERA  ROMERO ANGELA LILIANA", 
  "GUERRERO  BELTRAN YURY BIBIANA", 
  "BALLESTEROS  DUCUARA ALLISON SOPHIA", 
  "GUTIERREZ  GONZALEZ LILIANA PAOLA", 
  "GUZMAN  PINEDA MARIBEL ", 
  "RODRIGUEZ  LOPEZ ELIZABETH ", 
  "DIAZ  CARDENAS KAREN ESTEFANY", 
  "RODRIGUEZ  RAMOS MARTHA ISABEL", 
  "MARIN  LONDOÑO YURANI LORENA", 
  "ORTIZ  DE ARCINIEGAS GLORIA AMPARO", 
  "CASTAÑEDA  VIVAS ANA ODILIA", 
  "RUIZ  ACOSTA EDWIN MAURICIO", 
  "AREVALO   ELISABEHT PENAGOS", 
  "SILVA  VANEGAS LUIS ENRIQUE", 
  "PEREZ  ROMERO HIDALGO ALEJANDRO", 
  "BELTRAN  MORALES ALBA MARIA", 
  "RAMOS  MENDEZ MARIA CLARA", 
  "MANCHOLA  LIEVANO GUEY ", 
  "CABRA  RAMIREZ LUZ MARINA", 
  "MOYA  LUQUE ROSA TULIA", 
  "CABRA  RAMIREZ LUZ MARINA", 
  "MELO  PUENTES MARTHA JANETH", 
  "PADILLA   GRACIELA ", 
  "CESPEDES  MURCIA SONIA ESPERANZA", 
  "MAZO  DE CEBALLOS AMPARO ", 
  "GUEVARA  ALDANA DAVID ALFONSO", 
  "SANABRIA  LOPEZ JOSE ANTONIO", 
  "DUQUE  MORA ANA EFIGENIA ", 
  "CARDENAS   URSULA ", 
  "BARRERA  DE BALLESTEROS GRACIELA ", 
  "VARGAS  SEGURA TITO NORBERTO", 
  "CABRA  RAMIREZ LUZ MARINA", 
  "BAQUERO  MUÑOZ ROSA ADELA", 
  "DIMATE  SANDINO NEYLA ", 
  "VARGAS  DE CHAPARRO GLADYS ", 
  "ACHURY  MEJIA ANA CECILIA", 
  "ORJUELA  CUBILLOS ELSA NUBIA", 
  "NOVOA  DE MORELEZ LIGIA IRENE", 
  "FRANCO  SOTO JOSE JAIRO", 
  "GONZALEZ   CARLOS ", 
  "OSORIO  MONROY LUZ MARINA", 
  "DAZA  BUITRAGO CLARIVEL ", 
  "TRUJILLO  IZQUIERDO DAISSY MYRIAN", 
  "MENDEZ  SIERRA GUILLERMO ", 
  "BARBOSA  BEJARANO NORLEY ", 
  "RUIZ  DE ROJAS ROSA ELENA", 
  "HURTADO  VARGAS EPIGMENIO ", 
  "BELTRAN  PARDO SANTOS ANTONIO", 
  "DIAZ  GALINDO RAFAEL ", 
  "MORA  PERDOMO GABRIEL CESAR", 
  "SANCHEZ  RUIZ EDILBERTO ", 
  "DUARTE  RAMIREZ BLANCA LILIA", 
  "SUSA  MOLINA ALCIRA ", 
  "ACOSTA  JIMENEZ PAOLA ", 
  "LOPEZ  OCHOA ISABEL ", 
  "BENITEZ  MANAJARRES DIANA PAOLA", 
  "GOMEZ   TERESA ", 
  "ROJAS   ROSA TULIA", 
  "BELTRAN  BELTRAN LILIANA ANDREA", 
  "GUTIERREZ  VARGAS CHRISTIAN CAMILO", 
  "FIRACATIVE  MUÑOZ YESSICA ", 
  "GARZON  FLOREZ GUSTAVO ", 
  "PRIETO  MENDEZ ALBA LETICIA", 
  "GONZALEZ  DIAZ FLOR MYRIAM", 
  "VILLALOBOS  RAMIREZ TITO ", 
  "LEAL  ARAGON DILIA ", 
  "DIAZ  DIAZ ANGEL MARIA", 
  "LOPEZ  LOPEZ LUZ NANCY", 
  "FARFAN  CASALLAS CAROLINA ", 
  "RUIZ  GARZON LAURA VANESSA", 
  "MARIN  LOZANO LAURA ISABEL", 
  "MARTINEZ  DE RUIZ EULALIA ", 
  "MORENO  COY YUSNEIDY FABIANA", 
  "MORENO  COY EILEEN ARIANA", 
  "MARTINEZ   SALOME SIERRA", 
  "HERNANDEZ  DIAZ JERSSON DANILO", 
  "ARAGON  CAICEDO MARIA LEYDI", 
  "GUZMAN  MOGOLLON YESSICA JULIANA", 
  "MERCHAN   ISMELDA ", 
  "CLAVIJO  SANCHEZ ELIAS ", 
  "VALDERRAMA  MARTINEZ LUIS ALFONSO", 
  "GARCIA  ORTEGON ERIKA ALEJANDRA", 
  "ORDOÑEZ  CARO ANA CECILIA", 
  "VARGAS   STELLA ", 
  "ALVAREZ  MARTINEZ AURA MARINA", 
  "MAYORGA  GUTIERREZ FABIO NELSON", 
  "ROZO   CUPERTINO ", 
  "RODRIGUEZ  DE VASQUEZ GLADYS AURORA", 
  "YUGAKY  PEREA JORGE EMILIO", 
  "PATIÑO   MAURO ", 
  "CRUZ  CRUZ CARMEN CECILIA", 
  "MORENO   JOSE ALBERTINO", 
  "VILLAMIL   MARIA ELICENIA", 
  "CASTELLANOS  ALARCON ANA MARIA", 
  "NARANJO  BELTRAN ALEJANDRA ", 
  "MAYORGA  AVELLANEDA ABRAHAM ", 
  "FORERO  GRANADOS MARIA ALEXANDRA", 
  "RODRIGUEZ  VASQUEZ CHRISTIAN CAMILO", 
  "PUENTES  AGATON CARLOS ALBERTO", 
  "PARRA  OLIVOS MIGUEL ERNESTO", 
  "HERNANDEZ  DUARTE HERNANDO ", 
  "QUINTERO  OJEDA NANCY CAROLINA", 
  "CANGREJO  HASTAMORIR LUIS ELADIO", 
  "ROA  ROA JUAN DE DIOS", 
  "GUEVARA   ORLANDO MORENO", 
  "QUICAZAN  CASTILLO KEMBERLI TATIANA", 
  "ESCOBAR  TRIVIÑO MARIA MAGDALENA", 
  "AVILES  DE TORRES RAQUEL ", 
  "SANCHEZ  ROJAS FIDEL HUMBERTO", 
  "RUIZ  DE MARTINEZ DORA ", 
  "BECERRA  NOVOA JOSE JOAQUIN", 
  "GARZON  FLOREZ GUSTAVO ", 
  "ORTIZ  ORTIZ GLORIA ESPERANZA", 
  "MORENO  BAQUERO LIDIA ALCIRA", 
  "SANCHEZ  DE RODRIGUEZ LUCRECIA ", 
  "MIRANDA  MORALES WENDY JOHANNA", 
  "AREIZA  SILVA ASENED ", 
  "SALGADO  VELASQUEZ JEYMI CAROLINA", 
  "CASALLAS  GARAY FREDY ALEXIS", 
  "RODRIGUEZ  PULIDO FABIO ", 
  "SALAZAR  CASTILLO ERIKA INGRID", 
  "SANABRIA  FORERO MARTHA CECILIA", 
  "CRUZ  BAUTISTA MADY ", 
  "RAMIREZ  GARCIA CARLOS MANUEL", 
  "RIVEROS  CRUZ BLANCA SOFIA", 
  "QUINTERO  CARREÑO JOSE MARIA", 
  "BELTRAN  DE AVENDAÑO MARIA DOLORES", 
  "GONZALEZ  RIOS GLORIA PATRICIA", 
  "ACERO  VALDERRAMA OLGA YAZMIN", 
  "NUÑEZ  CARRERA NICOLAS SANTIAGO", 
  "MURILLO  PEDREROS SANDRA PATRICIA", 
  "PRIETO  DUARTE MARIA BALBINA", 
  "SUAZA  DEVIA PRISCILA ", 
  "ACOSTA  ANGULO LORENZA ", 
  "RUIZ   ELSA CONSUELO", 
  "GUTIERREZ  SUAREZ ELSY MARINA", 
  "PEÑUELA  MORENO BLANCA DORA", 
  "GUTIERREZ   FLOR ", 
  "CESPEDES  RIOBO ESNEDA ", 
  "LEON   MARIA YUBELY", 
  "ROJAS  SANCHEZ MARGARITA ", 
  "RODRIGUEZ   MARIA CRISTINA", 
  "BAQUERO  HERNANDEZ YANET ", 
  "QUINTIN  CAMACHO CLAUDIA ", 
  "RAMIREZ  CANDIA ANGIE ALEXANDRA", 
  "GOMEZ  ORTEGON BARBARA ", 
  "LADINO  LEGUIZAMON MARIA DEL ROSARIO", 
  "PINTO  ROBAYO NATALY ", 
  "LOZANO   SOFIA DEL PILAR", 
  "MORENO  GALINDO MIGUEL ALFONSO", 
  "PIÑEROS  LEON CECILIA ", 
  "VILLAMIZAR  GARCIA LUISA FERNANDA", 
  "GONZALEZ  RAMIREZ LUIS ERNESTO", 
  "DEVIA  PEÑA INGRID LICIANA", 
  "MARTINEZ  JIMENEZ GEOVANNY ANDRES", 
  "GRAJALES   JORGE ", 
  "RAMIREZ  VILLALOBOS JORGE ARTURO", 
  "RODRIGUEZ   JOSE VICENTE", 
  "BENAVIDEZ   MARCO ANTONIO", 
  "CELIS  RODRIGUEZ HUMBERTO HERNANDO", 
  "GONZALEZ  CASTAÑO ARCESIO ", 
  "OSORIO  MALDONADO GUILLERMO ", 
  "DIAZ  RINCON ANGELICA MARIA", 
  "DIAZ  RINCON ALLISON NICOL", 
  "AGUDELO   EMILCE ORTIZ", 
  "CARRILLO  AVELLANEDA EDNA PATRICIA", 
  "QUINTIN  BENAVIDES GUSTAVO ANDRES", 
  "GOMEZ  DE BOTERO GLORIA ANGELICA", 
  "VIDAL  MORA LILIA ROCIO", 
  "CRUZ  MORALES DORA MIREYA", 
  "SIERRA  NARANJO LUZ MARINA", 
  "MAHECHA  PRADA FREDERICK FITGERALD", 
  "SIERRA  CUELLAR CAROLINA ", 
  "GUZMAN  DE ROMERO HORTENSIA ", 
  "MARTINEZ  CASTELBLANCO LAURA XIMENA", 
  "VARGAS  MONTOYA YENNY YURANY", 
  "BETANCOURT  BARRERA JUAN DAVID", 
  "SANCHEZ  SARMINTO ARCADIO ", 
  "PEÑA  MORALES FELIX ROBERTO", 
  "VERGARA   DORIS ", 
  "ROJAS  QUEVEDO MARIA NIEVES", 
  "PINEDA  GARCIA JHOJAN ESTIBEN", 
  "PINEDA  GARCIA JHOJAN ESTIBEN", 
  "MARTINEZ  ZAPATA MIGUEL ANGEL", 
  "MORENO  RINCON MARIA DEL PILAR", 
  "LOPEZ  OTERO FRANCISCO JOSE PASTOR", 
  "PINEDA  GUZMAN JHON STIVEN", 
  "RAMIREZ  OSORIO JOSE LEONCIO", 
  "FLOREZ  JARAMILLO MARIA ISABEL", 
  "FLOREZ  JARAMILLO MARIA ISABEL", 
  "MARTINEZ  GONZALEZ CENAIDA ", 
  "ESCOBAR  PINILLA ANY LUCIA", 
  "ANDRADE  ANDRADE LUZ MARJEYI", 
  "MAYORGA  DE SOLANILLA MARIA PAULINA", 
  "CASTRO  ROA ASTRID CAROLINA", 
  "ESCOBAR  CRUZ ONOFRE ", 
  "NIETO  ROJAS JUAN AURELIO", 
  "GONZALEZ  PEÑUELA FAYULI STEFANY", 
  "GARCIA  MORENO JOSE ALFREDO", 
  "PARRA  BERNAL BREIDY SEBASTIAN", 
  "HERNANDEZ  ALVARADO BAUDILIO ", 
  "GONZALEZ   PEDRO PABLO", 
  "CORDOBA  MARQUEZ LIGIA AURORA", 
  "PINEDA   MARIELA INES", 
  "MARTINEZ  MORA PABLO EMILIO", 
  "GUEVARA   MARGARITA ", 
  "CORTES  ROJAS JOHANNA ", 
  "ARIAS  DE ARIAS OVEIDA ", 
  "SARMIENTO  DE MICAM ALCIRA ", 
  "GUTIERREZ  RODRIGUEZ ANA ", 
  "RINCON  DE FLOREZ LEOVIGILDA ", 
  "PEÑA  SANCHEZ LEONOR ", 
  "HERNANDEZ  AVENDAÑO JOSE ISIDRO", 
  "FORERO  DE GONZALEZ CLARA INES", 
  "TOLEDO   RODRIGO ", 
  "CHAVEZ  DE LISSA NHORA ", 
  "OSORIO  LOPEZ ROSA GIRLENA", 
  "RINCON  SUAREZ ARNULFO ", 
  "JARA  CUAJI GLADIS ", 
  "FORERO  RUIZ ALBERTO ", 
  "ROZA  CLAVIJO BLANCA CECILIA", 
  "CARDENAS  QUIÑONES RAUL ALBERTO", 
  "RODRIGUEZ  BARACALDO BLANCA CECILIA", 
  "SANABRIA  CASTIBLANCO SARA ISABEL", 
  "PUENTES  CALDERON FREDY ENRIQUE", 
  "JUAN  MANUEL MARTINEZ ALVARADO", 
  "LOZANO  MOSQUERA DIANA MARISOL", 
  "CALVO   MARIA DEICY", 
  "MARTINEZ  DE REY MARIA ", 
  "ROZO  AYA OCTAVIO BENJAMIN", 
  "SUSA  CASTILLO MARIA ALCIRA", 
  "RINCON  AGUILAR GLORIA ESTELA", 
  "MALLARINO  LLINAS INES ELVIRA", 
  "MORALES  PABON ANGELA VIVIANA", 
  "OSORIO   MARIA  ELSA ", 
  "TOVAR  ROJAS DYLAN FELIPE", 
  "PAEZ  LOZANO JULIO ENRIQUE", 
  "BERBEO  DE RAMIREZ CLARA AMPARO", 
  "BUITRAGO  DE GONZALEZ MARIA TERESA", 
  "SEGURA  PRIETO FABIO ", 
  "HERNANDEZ  CRUZ YUDY EMILCE", 
  "GARZON  CAMPOS LUZ MARINA", 
  "COTA  MOLINA ISABEL ", 
  "VILLALBA  TORRES MARIA ELSA", 
  "FLOREZ  MORENO MARIA EULALIA", 
  "MURILLO  PEDREROS SANDRA PATRICIA", 
  "DE LA OSSA  HERNANDEZ YULY LUCILA", 
  "VILLALOBOS  DIAZ ELIZABETH ", 
  "BELTRAN   LUIS MAURICIO", 
  "GOMEZ   MARLENY ", 
  "CEPEDA   ANA DEL ROCIO", 
  "MARTINEZ   BRANDON ", 
  "LOPEZ  ARANGO GLORIA NANCY", 
  "SANTANA   JOSE ANTONIO", 
  "ORJUELA  GUERRERO LILIANA YAZMIN", 
  "SASTOQUE  BAUTISTA ELKIN ANTONIO", 
  "TORRES   JAIRO ALBERTO", 
  "CARRILLO  ALBERTO LAURA CAMILA", 
  "CARRILLO  ALBERTO KAREN JULIANA", 
  "URIBE  ANGEL JORGE IVAN", 
  "QUIÑONES  MONTEALEGRE MIGUEL GIOVANNY", 
  "GODOY  TOVAR JESUS DAVID", 
  "PARRA  OSPINA GLORIA ", 
  "CARDENAS  GARCIA SAMANTA ", 
  "MONTENEGRO  GUERRERO PEDRO ANTONIO", 
  "ALARCON  ALARCON PASCUAL RUBIANO", 
  "CASTRO  ALFONSO MARIA ELENA", 
  "RAMIREZ  FLOREZ ANTHONY ", 
  "VEGA  MOLINA KAMELY JULIANA DELA", 
  "GOMEZ  SEPULVEDA HECTOR WILSON", 
  "TORRES  SALAMANCA BEYERLESTO ", 
  "CEBALLOS  PATIÑO CARLOS ENRRIQUE", 
  "MORALES  GUTIERREZ ROSA NINSA", 
  "HERRERA   MARIA TERESA", 
  "CASTILLO  ESPITIA CECILIA ISABEL", 
  "RUIZ  ORTIZ BLANCA CECILIA", 
  "RICAURTE   CELERINO ", 
  "PAEZ  DE MELO MATILDE ", 
  "OBANDO  CASTILLO NANCY ", 
  "IBAÑEZ  GAONA LUZ MERY", 
  "MURCIA  MORA LEONIDAS ", 
  "MARTINEZ   MARINA ", 
  "CARDENAS  DE ECHEVERRY CECILIA ", 
  "ROMERO  LEON MANUEL VICENTE", 
  "VERA  DIAZ GENARO ", 
  "RAMIREZ  GARCIA JOSE DE JESUS", 
  "CASTAÑO  MONTOYA JULIO CESAR", 
  "SUAREZ  PRIETO VICENTE ", 
  "DAZA  GONZALEZ LILIO ALFONSO", 
  "GRANADA  OSPINA BLANCA DAISY", 
  "JIMENEZ  SALAZAR FRANCISCO JAVIER", 
  "ZAPATA   JAVIER ALCIDES", 
  "RAMIREZ  DE VILLALOBOS MARIA EMMA", 
  "ARCINIEGAS  MANRIQUE GUSTAVO ", 
  "BALLESTEROS  NAVARRETE FANNY STELLA", 
  "TORRES  BAQUERO JULIO CESAR", 
  "VILLABON  CASTILLO MYRIAM ", 
  "MENDEZ  DIAZ DAVID SANTIAGO", 
  "AMEZQUITA  MURCIA AURA LUCY", 
  "MELO  SARRIA YUDY PATRICIA", 
  "AGUDELO  ACOSTA LUIS HERNANDO", 
  "GARAY  ROMERO CARLOS JULIO", 
  "CUELLAR  PERDOMO RAFAEL ", 
  "OLANO  GARCIA EFRAIN EMILIO", 
  "MUÑOZ  DE PARRA MARBEL ", 
  "PARDO  REYES MIREYA ASTRID", 
  "TORRES  BELTRAN MARIA AGAPITA", 
  "RAMIREZ  DUARTE DIANA CAROLINA", 
  "ARROYAVE   RUBEN ", 
  "MARTINEZ  LUNA ANA LEIDYS", 
  "VANEGAS  NOVOA WILLIAM ALEXANDER", 
  "FISCAL  LOPEZ LILIANA MARCELA", 
  "MOSCOSO  MARTINEZ CLAUDIA EUNISE", 
  "PEREZ  HERNANDEZ DIANA YANIRA", 
  "RAMOS  CUESTA GABRIELA ", 
  "AUSIQUE  VASQUEZ CAROL GISELA", 
  "MORA   ALEXANDER COLMENARES", 
  "LOZANO  DE RUIZ OLGA MARIA", 
  "REYES  PINZON NIEVES ", 
  "ESCOBAR  MONTOYA MARIA DE LALUZ", 
  "CASTAÑEDA  LOPEZ FABIO ", 
  "CRUZ   JORGE ENRIQUE", 
  "MOSCOSO  DE ORTIZ FABIOLA ", 
  "ORTIZ  PEREZ LIGIA STELLA", 
  "LOPEZ  MORA MARIA TERESA", 
  "ROJAS  CAMARGO LILIA ", 
  "ALAPE  DE TAPIERO LAUREANA ", 
  "REYES   JORGE ", 
  "VASQUEZ  LADINO JAIRO EUCLIDES", 
  "GODOY  GARCIA ANDRES FELIPE", 
  "CASTILLO  CASTILLO JOSE EDIBERTO", 
  "ACEVEDO  DE GUITIERREZ BLANCA LILIA", 
  "VASQUEZ  PULIDO DAVID ALFONSO", 
  "SIMBAQUEBA   ROBERTO SOSA", 
  "RODRIGUEZ  DE GIRALDO JULIA ", 
  "GONZALEZ  PEDRAZA MARIA LIGIA", 
  "MENDEZ   JOSE MARIO", 
  "DIAZ  JUTINICO LUIS ENRIQUE", 
  "PULIDO  MORA GERMAN ", 
  "RUEDA  SERRANO LUIS ANTONIO", 
  "RODRIGUEZ  VEGA JHON ALEXANDER", 
  "CAMERO  SALCEDO MARIA CRISTINA", 
  "PRIETO  ROZO RUBIELA CAROLA", 
  "ARIZAZ  RIAÑO EVELYN LUCIANA", 
  "MOLINA  CHITIVA ERICK MATIAS", 
  "PULIDO  PEÑA DOMINICK FERNANDO", 
  "CASTILLO  BAQUERO ERICK DAMIAN", 
  "FORERO  AVILA HANNY VALERIA", 
  "CAICEDO  GARZON DEINY DAYELIN", 
  "Fonseca Gualdron, Luz Marlene", 
  "Caballero Moreno, Paula Yuliana", 
  "Alzate Cardona, Jose Alvaro", 
  "Rodriguez Mahecha, Leidy Tatiana", 
  "Simbaqueba Pulgarin, Jhon Sebastian", 
  "Ibarra Perez, Miguel Angel", 
  "Garcia Beltran, Emiliano", 
  "Botero Valencia, Gabriela", 
  "Londoño, Guillermo", 
  "Rodriguez Castellanos, Jose Isbonemir", 
  "Bolaños Ramirez, Maria Cristina", 
  "Gonzalez Quiroga, Maria Ipolita", 
  "Bautista Gaona, Eliecid", 
  "Diaz Mendez, Juan Jose", 
  "Ariza Leon, Leidy Tatiana", 
  "Diaz Mendez, Isabella", 
  "Cuineme Suarez, Diego Ricardo", 
  "Leiva Leiva, Ana Rosa", 
  "Ramirez Tovar, Teresa", 
  "Gonzalez Naranjo, Cristina Trinidad", 
  "Mora Gomez, Rafael", 
  "Mendez Camacho, Maria Isabel", 
  "Riveros Cruz, Blanca Sofia", 
  "Sanchez Moreno, Blanca Nelly", 
  "Gualteros Rodriguez, Maria Teresa", 
  "Tellez De Mora, Lucila", 
  "Torres Gutierrez, Diana Carolina", 
  "Villamizar Orozco, Luz Stella", 
  "Borda Urrea, Paola Andrea", 
  "Arevalo Campos, Maria Alejandra", 
  "Ruiz Camargo, Julieth Stefany", 
  "Guzman Linares, Nubia Marcela", 
  "Cubides Rivera, Vanessa Del Pilar", 
  "Lasso Perez, Lady Milena", 
  "Martinez Rojas, Sharith Dayana", 
  "Aya Martinez, Natalia Andrea", 
  "Bobadilla Farfan, Consuelo", 
  "Sandoval Zamudio, Mary Cely", 
  "Zipaquira De Linares, Margarita", 
  "Morales Trujillo, Orlando", 
  "Duarte Saboya, Hector Julio", 
  "Bohorquez Sanchez, Leidy Stefany", 
  "Martinez Santos, Ledy Johana", 
  "Martinez Santos, Ledy Johana", 
  "Garcia Bazurto, Maria Paula", 
  "Muñoz Diaz, Grace Carolina", 
  "Corzo De Pinto, Rosa Marina", 
  "Mora Guerrero, Anyi Tatiana", 
  "Cifuentes Campos, Yizel Natalia", 
  "Paez Guerrero, Ana Raquel", 
  "Rodriguez De Carpeta, Maria Evidalia", 
  "Caicedo Cuellar, Marleny", 
  "Rodriguez Morales, Lina Maria", 
  "Vega Rojas, Olga Milena", 
  "Acosta Jimenez, Paola", 
  "Avila Niño, Maria Del Carmen", 
  "Cerquera De Nieto, Maria Del Carmen", 
  "Rueda Salvador, Liliana Andrea", 
  "Cuellar Reyes, Ana Aiden", 
  "Orjuela Garcia, Laura Paola", 
  "Forero Rubiano, Laura Patricia", 
  "Robayo Simbaqueva, Ana Gabriela", 
  "Gonzalez Piraquive, Alejandra", 
  "Delgado Calderon, Karen Sofia", 
  "Martinez Guzman, Diana Katerin", 
  "Bernal Baron, Deisy Johana", 
  "Franco Arango, Margarita", 
  "Moreno Prada, Sandra Milena", 
  "Forero Martinez, Danna Salome", 
  "Bernal Hornero, Erick Julian", 
  "Rodriguez Daza, Flower Eddy", 
  "Osorio Malpica, Monica", 
  "Moya Buendia, Maria Yolanda", 
  "Ballesteros Navarrete, Fanny Stella", 
  "Esguerra Velandia, Carlos Roberto", 
  "Segura Silva, Martha Consuelo De Las Mercedes", 
  "Hernandez Ramos, Ana Betulia", 
  "Rodriguez Martinez, Luz Marina", 
  "Rodriguez Sanabria, Leidy Mabel", 
  "Velasquez Pachon, Sergio Alberto", 
  "Rodelo Mieles, Yeison", 
  "Vega Cubillos, Anid Gabriela", 
  "Castro Cocinero, Danny Victoria", 
  "Riascos Diaz, Maria Paula", 
  "Bernal Fresneda, Sara Valentina", 
  "Castro Cristancho, Michell Sofia", 
  "Mendez Forero, Leidy Yulieth", 
  "Florez Rojas, Zamara", 
  "Mair Gordillo, Olga", 
  "Cifuentes Ñustes, Doris Yineth", 
  "Guerrero Cardenas, Marisol", 
  "Lozano Portillo, Maria Dolores", 
  "Mikan Gonzalez, Leydy Carolina", 
  "Posada Acuña, Elisabet", 
  "Ramirez Gonzalez, Abril Antonia", 
  "Giraldo Aldana, Maria Camila", 
  "Zamora Rozo, Danna Valentina", 
  "Sierra Diaz, Isabella", 
  "Perez Firacative, Martina", 
  "Rincon Mendez, Dylan Esteban", 
  "Guzman Muñoz, Sara Sofia", 
  "Castro Cocinero, Danny Victoria", 
  "Camelo Ramos, Alejandro", 
  "Carmona Ortiz, Jennifer Aylin", 
  "Sanchez Cortes, Salvador", 
  "Ramos Vargas, Emmanuel", 
  "Contreras Cubillos, Emma Sofia", 
  "Chaparro Alfonso, Maria Luciana", 
  "Cardenas Linares, Juan Jose", 
  "Cardenas Linares, Thiago", 
  "Angel Castro, Julian Kamilo", 
  "Fresneda Cocoma, Nestor Alejandro", 
  "Montañez Cocoma, Milan Martin", 
  "Rodriguez Bolivar, Maria Antonela", 
  "Molina Rodriguez, Lauren Camila", 
  "Vanegas Chacon, Cesar Joel", 
  "ESTEBAN  SOTAQUIRA VICTOR JEXAIN", 
  "RIVEROS   VIRGILIO ROMERO", 
  "BUENO   MERCEDES ", 
  "SOLANO  AVILA GLADYS YOLIMA", 
  "GUTIERREZ  TORRES JOSE ENRIQUE", 
  "CORREDOR  ZAMORA GERMAN ALFONSO", 
  "AYA  DE RODRIGUEZ LUZMILA ", 
  "MOSQUERA  OSPINA YENCY JOHANA", 
  "POLOCHE   JAYDI ", 
  "SARMIENTO   BLANCA CECILIA", 
  "DIAZ  DE TORRES ANA DELIA", 
  "SANABRIA  GOMEZ JOSE JOAQUIN", 
  "REDONDO  DE CARMARGO MARIA MERCEDES", 
  "VELASQUEZ  MENDEZ FLOR ALBA", 
  "MUÑOZ  LEON YENNY CAROLINA", 
  "GUTIERREZ  GUTIERREZ ANA BETTY", 
  "CARRANZA  SALGUERO ANATILDE ", 
  "AVILA  DE CHITIVA AURA MARIA", 
  "BELTRAN  AVILAN CARLOS FABIAN", 
  "BETANCOURT  RAMIREZ MARTHA LUCIA", 
  "MAYORGA  DIAZ LILIA AMPARO", 
  "MAYORGA  DIAZ LILIA AMPARO", 
  "DUCUARA   HERMINDA ", 
  "LOZANO  DE LASSO CECILIA ", 
  "ZAPATA  CASTRILLON LUIS FERNANDO", 
  "ESPINOSA  DE RODRIGUEZ FABIOLA ", 
  "ESPITIA   APOLONIO PINZON", 
  "TRUJILLO  MONTEJO MANUEL ANTONIO", 
  "TORRES  RODRIGUEZ EMILIO DE JESUS", 
  "TORRES  RODRIGUEZ EMILIO DE JESUS", 
  "CASTILLO  MONTEALEGRE LISSETH CAMILA", 
  "SOSA  SUAREZ JESUS ANTONIO", 
  "RIVEROS  DE SOLER OLGA MARINA", 
  "ROSA  RUIZ CARMEN ", 
  "ROJAS  ROA OLMER ALBERTO", 
  "CASTAÑO   ALBA ", 
  "POVEDA  DE QUEMBA BLANCA RUBY", 
  "FLOREZ  GORDILLO OLGA LUCIA", 
  "CAMARGO  DIAZ ILDA ALCIRA", 
  "DIAZ   JOSE SEVERO", 
  "PERDOMO  ANDRADE FERNANDO ", 
  "GARCIA  DE ACERO MARIA ELISA", 
  "OSORIO  GIL LUZ DIBIA", 
  "BALLESTEROS  NAVARRETE FANNY STELLA", 
  "PEREZ  FRANCO JORGE ABEL", 
  "GUTIERREZ  RAMIREZ JULIO CESAR", 
  "MONCADA  DE BALLESTEROS AMPARO ", 
  "CRUZ  MACIAS BLANCA CECILIA", 
  "TORRES  DE PINEDA ANA ZOILA", 
  "GONZALEZ  SANCHEZ MILLER JAIME", 
  "SANCHEZ  LEGUIZAMON JOSE BERNABE", 
  "CASTILLO   ALVARO ", 
  "DELGADO  DE LEMUS MARGARITA ", 
  "AMAYA  GARCIA FLORENCIO ", 
  "MORENO  PIÑEROS JOSE MANUEL", 
  "AYALA  DE TRIVIÑO CARMEN JULIA", 
  "RODRIGUEZ  DE ACOSTA ANA BERTHA", 
  "MUÑOZ  CONTRERAS ALIET ", 
  "PARRA  RODRIGUEZ FANNY ", 
  "HERNANDEZ  DE ORTEGA CRISTINA ", 
  "RADA  OSORIO HERNANDO ", 
  "GUEVARA  ALDANA DAVID ALFONSO", 
  "CARRILLO  CASTELLANOS CARMEN ALICIA", 
  "LOPEZ  ORTIZ JENNY ANDREA", 
  "VELEZ  DE CARDENAS MARINA ", 
  "VARGAS  SILVIA MARGARITA ", 
  "SIERRA  VELASQUEZ ANA FELISA", 
  "DURAN  DE CASTILLO ANA LEONOR", 
  "ALFONSO  URREGO ANA IMELDA", 
  "PEREZ  SANCHEZ BRIGID ", 
  "SAENZ  MURILLO MIREYA ", 
  "RAMIREZ   ROSA ELVIRA", 
  "MOLINA  HURTADO RUTH EMMA", 
  "ZAMUDIO  CHAVARRO CARLOS JULIO", 
  "CASTILLO  VELASQEUZ MARIA LIGIA", 
  "HERNANDEZ  POVEDA MARIA ROSARIO", 
  "VARGAS  CORREDOR PEDRO RAMON", 
  "ALBARRACIN  ARCHILA ALBA INES", 
  "AREVALO  FERNANDEZ TERESA ", 
  "AREVALO   ELVIA BEATRIZ", 
  "GALINDO  BERNAL JORGE ENRIQUE", 
  "MORA  DE HERNANDEZ ANA CECILIA", 
  "BETANCOUR  DE MUÑOZ MARIA JOVITA", 
  "ALVARADO  RICARDO ANDRES ELOY", 
  "CASTAÑEDA  SERRANO GILBERTO ", 
  "BAQUERO  RODRIGUEZ MARIA DEL CARMEN", 
  "CHAVEZ  CASAS WILSON ", 
  "GONSALEZ  DUQUE YAMILE ", 
  "BARRERA  BARRERA ANDRES AVELINO", 
  "RAMOS  SERPA ELIECER ", 
  "VILLALBA  DE MOYANO ROSA MARIA", 
  "OROZCO  ALVARADO CLAUDIA PATRICIA", 
  "VILLADA   NIDIA ", 
  "RODRIGUEZ  BELTRAN MARIA ALICIA", 
  "PULIDO   MARIA ELCY", 
  "VERGARA  GAMEZ YENNY MARCELA", 
  "OSORIO  OROZCO LUZ MARINA", 
  "AGUILERA  GUERRERO JOSE VICENTE", 
  "RODRIGUEZ  SANABRIA LEIDY MABEL", 
  "AGUILAR   GONZALO VARGAS", 
  "RUIZ  MESA MIGUEL IGNACIO", 
  "AMADOR  ROSAS BEATRIZ ALEJANDRA", 
  "RAMOS  RAMOS SORIN LUCIA", 
  "TORRES  ROMERO BLANCA CECILIA", 
  "MOLINA  RODRIGUEZ NANCY PAOLA", 
  "LADINO  BARACALDO MARIA BAUDELINA", 
  "BOHORQUEZ  ROJAS SANDRA MILENA", 
  "GARCIA  LOZANO LEIDY MILENA", 
  "VASQUEZ  LEGUIZAMOS YHON ALEXANDER", 
  "NORIEGA  ZUÑIGA GABRIEL EDUARDO", 
  "TUNUBALA  RODRIGUEZ MARIA MERCEDES", 
  "ARANDA   ADRIANA DE LISI", 
  "LOPEZ  DE BOLIVAR MARIA DEL CARMEN", 
  "GALINDO   ANA GIBE", 
  "DORA  MARIA HERRERA CASTELLANOS", 
  "MENDOZA   CECILIA MENDOZA", 
  "RODRIGUEZ  FONSECA LILIA AURORA", 
  "SUAREZ  VARGAS RICARDO ", 
  "TORRES  FONSECA GLORIA HELENA", 
  
  
   
 


];




const prefefs = [
    
  "573143797281",
  "573153049436",
  "573102921269",
  "573142961595",
  "573204853456",
  "573104866262",
  "573202960750",
  "573212001717",
  "573133964974",
  "573224121743",
  "573336198857",
  "573164609409",
  "573223445777",
  "573214920214",
  "573103206064",
  "573207255315",
  "573213792535",
  "573235908127",
  "573115650866",
  "573012562401",
  "573123516357",
  "573007983174",
  "573045372299",
  "573125360040",
  "573004252051",
  "573207255315",
  "573176000625",
  "573144702035",
  "573142474268",
  "573006392553",
  "573203245611",
  "573228088722",
  "573138835243",
  "573186717118",
  "573112190220",
  "573103302601",
  "573215140233",
  "573115977780",
  "573223420471",
  "573118848194",
  "573178956531",
  "573015868926",
  "573102089362",
  "573181517172",
  "573209241744",
  "573112648932",
  "573044990764",
  "573112648932",
  "573023500871",
  "573229242948",
  "573118140937",
  "573124497919",
  "573002293279",
  "573115386355",
  "573106283006",
  "573142582756",
  "573123782234",
  "573115287646",
  "573112648932",
  "573123386758",
  "573178421034",
  "573123079212",
  "573102291771",
  "573212892678",
  "573114651386",
  "573185114462",
  "573207771170",
  "573202810506",
  "573214235281",
  "573153399254",
  "573125250787",
  "573124416264",
  "573006521323",
  "573146692217",
  "573222501632",
  "573118476955",
  "573202242617",
  "573112137511",
  "573112123175",
  "573134937404",
  "573123374555",
  "573202873871",
  "573113554712",
  "573177833511",
  "573134537039",
  "573132654705",
  "573209575819",
  "573125857895",
  "573123269707",
  "573132460617",
  "573203271009",
  "573133698901",
  "573204943276",
  "573115657742",
  "573128793784",
  "573015744634",
  "573132299984",
  "573108048570",
  "573175970929",
  "573158223938",
  "573158223938",
  "573139260651",
  "573108120828",
  "573203096924",
  "573115096847",
  "573125073294",
  "573125073294",
  "573015822814",
  "573003136587",
  "573213193039",
  "573012087106",
  "573115210314",
  "573202471831",
  "573134693788",
  "573123471339",
  "573106253217",
  "573106253217",
  "573116067131",
  "573107972637",
  "573136358064",
  "573219233638",
  "573154301571",
  "573208597523",
  "573115790159",
  "573204665147",
  "573005548086",
  "573107643529",
  "573177587969",
  "573214209378",
  "573195123411",
  "573118775931",
  "573006601609",
  "573012935803",
  "573143999178",
  "573204190781",
  "573105589481",
  "573134914480",
  "573223045409",
  "573123269707",
  "573142311950",
  "573172831816",
  "573123154342",
  "573164122605",
  "573023259623",
  "573144317261",
  "573125331133",
  "573242552913",
  "573112141445",
  "573208177920",
  "573013171443",
  "573202728924",
  "573123279754",
  "573214209378",
  "573185127125",
  "573103376910",
  "573112308508",
  "573142749077",
  "573188958318",
  "573105625229",
  "573143907896",
  "573219735778",
  "573232222627",
  "573197220923",
  "573202626628",
  "573124139321",
  "573125962154",
  "573024664523",
  "573132237988",
  "573115522472",
  "573108151973",
  "573115256131",
  "573132276275",
  "573138070675",
  "573118734667",
  "573124910400",
  "573143051992",
  "573006272226",
  "573125664502",
  "573002449176",
  "573194069611",
  "573224195865",
  "573102820952",
  "573123162392",
  "573103030953",
  "573134370758",
  "573107504171",
  "573112181648",
  "573115353364",
  "573102005714",
  "573163700303",
  "573163700303",
  "573132008828",
  "573202088531",
  "573115097141",
  "573003235738",
  "573123952820",
  "573138139587",
  "573125516528",
  "573227440934",
  "573008622164",
  "573102580073",
  "573124242154",
  "573142774972",
  "573176528321",
  "573134079183",
  "573133349821",
  "573202618149",
  "573134511425",
  "573107747431",
  "573107747431",
  "573134493546",
  "573203939629",
  "573115601525",
  "573012836885",
  "573137626886",
  "573158436934",
  "573158436934",
  "573172913502",
  "573123516357",
  "573057584621",
  "573202626554",
  "573132399103",
  "573123516357",
  "573128822900",
  "573124966823",
  "573144085496",
  "573148332816",
  "573224785944",
  "573133693348",
  "573173226162",
  "573118341273",
  "573144713999",
  "573125089711",
  "573214084648",
  "573132355468",
  "573002785704",
  "573114491629",
  "573124740374",
  "573222481955",
  "573114039698",
  "573115304438",
  "573132116787",
  "573204279689",
  "573007982696",
  "573107878183",
  "573138402037",
  "573045533856",
  "573223844529",
  "573115468879",
  "573134214225",
  "573138352505",
  "573125634691",
  "573112443377",
  "573143704388",
  "573108267342",
  "573218643277",
  "573219721310",
  "573213673752",
  "573142314398",
  "573115383470",
  "573212611534",
  "573015313016",
  "573132353795",
  "573232431321",
  "573123935173",
  "573202692021",
  "573224016984",
  "573142847807",
  "573107871224",
  "573124463831",
  "573102955277",
  "573106744564",
  "573188958318",
  "573132143613",
  "573202759305",
  "573203162714",
  "573054390484",
  "573124482129",
  "573172329392",
  "573212297660",
  "573132085813",
  "573208487340",
  "573223250080",
  "573107959013",
  "573114814084",
  "573114814084",
  "573118289218",
  "573143095394",
  "573103338127",
  "573142894425",
  "573227849679",
  "573124335690",
  "573202391659",
  "573108785720",
  "573134091163",
  "573118081481",
  "573114968594",
  "573106235474",
  "573106253217",
  "573156195978",
  "573008737890",
  "573106660830",
  "573107979394",
  "573123778567",
  "573134094020",
  "573177429947",
  "573114400897",
  "573142258938",
  "573212527112",
  "573005141109",
  "573002209049",
  "573115886521",
  "573105546342",
  "573153823365",
  "573157351334",
  "573204957508",
  "573004180596",
  "573128198362",
  "573102101364",
  "573142444584",
  "573114999876",
  "573133681947",
  "573102318584",
  "573204303520",
  "573144081652",
  "573124618811",
  "573134836598",
  "573124029278",
  "573112509915",
  "573005697315",
  "573123717666",
  "573022072683",
  "573176717343",
  "573053320803",
  "573142151694",
  "573053010000",
  "573229064257",
  "573165847830",
  "573223271969",
  "573105637772",
  "573208192751",
  "573202821145",
  "573144645164",
  "573138608631",
  "573118548185",
  "573214774183",
  "573112439499",
  "573185374266",
  "573132952948",
  "573133291562",
  "573028295668",
  "573143245610",
  "573143171686",
  "573132028452",
  "573132324595",
  "573102700952",
  "573118506277",
  "573126689270",
  "573142934186",
  "573045666713",
  "573107748908",
  "573102598083",
  "573112903531",
  "573118972080",
  "573123289839",
  "573195551005",
  "573212140404",
  "573125290448",
  "573202347922",
  "573118643462",
  "573103421294",
  "573138140685",
  "573024650964",
  "573022211847",
  "573128572867",
  "573014921847",
  "573105505157",
  "571069764849",
  "573102983867",
  "573233208955",
  "573144458876",
  "573158148878",
  "573003968421",
  "573152587286",
  "573222913859",
  "573233208955",
  "573133911012",
  "573203001694",
  "573103483471",
  "573005441423",
  "573107609240",
  "573005441423",
  "573144619806",
  "573114782540",
  "573138842345",
  "573216455927",
  "573003644127",
  "573005441423",
  "573103019776",
  "573143288410",
  "573118053095",
  "573003644127",
  "573124469575",
  "573188658824",
  "573125503118",
  "573058627651",
  "573145139870",
  "573007755742",
  "573138280349",
  "573167461905",
  "573125293493",
  "573207288813",
  "573132379658",
  "573162364739",
  "573132330008",
  "573175344033",
  "573133577516",
  "573143043501",
  "573219102985",
  "573219102985",
  "573136994627",
  "573123314469",
  "573124122162",
  "573134553241",
  "573209449125",
  "573160448414",
  "573112898350",
  "573112022184",
  "573002963585",
  "573192579068",
  "573123374555",
  "573166250310",
  "573026360149",
  "573004014546",
  "573123398259",
  "573112727151",
  "573194189461",
  "571193238678",
  "573003071208",
  "573224149446",
  "573223317464",
  "573102601672",
  "573103262459",
  "573125585140",
  "573125293493",
  "573232315379",
  "573105694617",
  "573025189000",
  "573208091475",
  "573114506697",
  "573124406504",
  "573142543390",
  "573144520623",
  "573172849387",
  "573102775891",
  "573163349569",
  "573186059602",
  "573102687258",
  "573004242646",
  "573192944801",
  "573115970068",
  "573255157748",
  "573115334012",
  "573134563080",
  "573104887552",
  "573123584208",
  "573134362681",
  "573219048215",
  "573132730544",
  "573232304143",
  "573222812035",
  "573207968975",
  "573208151057",
  "573212025264",
  "573157484347",
  "573115334012",
  "573123314469",
  "573004242646",
  "573155812884",
  "573204107734",
  "573214376652",
  "573142774972",
  "573214735375",
  "573212232101",
  "573107781703",
  "573107781703",
  "573007605496",
  "573103440849",
  "573105230340",
  "573124790810",
  "573223023755",
  "573102427172",
  "573107630871",
  "573138315949",
  "573013774644",
  "573114333292",
  "573212001071",
  "573008448801",
  "573144749306",
  "573007468552",
  "573022528225",
  "573208460043",
  "573005047121",
  "573112188758",
  "573023390259",
  "573004229845",
  "573142831187",
  "573017197663",
  "573205396125",
  "573134582506",
  "573228424189",
  "573124888611",
  "573204244689",
  "573204244689",
  "573158473850",
  "573133828870",
  "573112440583",
  "573166720179",
  "573112500514",
  "573123227765",
  "573148049172",
  "573148049172",
  "573219274147",
  "573212289933",
  "573132297906",
  "573112273670",
  "573183023541",
  "573243953249",
  "573013655806",
  "573192575012",
  "573125548928",
  "573208226953",
  "573106951782",
  "573105867189",
  "573115052809",
  "573133681947",
  "573023631274",
  "573228319669",
  "573142579275",
  "573125397893",
  "573112118381",
  "573103278901",
  "573114668378",
  "573105889059",
  "573015528350",
  "573144687798",
  "573138298137",
  "573125049506",
  "573176523708",
  "573217661498",
  "573143392926",
  "573125790306",
  "573192041914",
  "573002293279",
  "573124135090",
  "573143421907",
  "573114487252",
  "573114089713",
  "573168271099",
  "573164193892",
  "573004014546",
  "573143932267",
  "573103039004",
  "573156138230",
  "573106130173",
  "573114782545",
  "573144696431",
  "573115237608",
  "573184423403",
  "573143508391",
  "573223332342",
  "573174529944",
  "573144183943",
  "573132515057",
  "573204275784",
  "573126591224",
  "573112139838",
  "573125930948",
  "573106094054",
  "573223331352",
  "573202037214",
  "573142627825",
  "573142930570",
  "573182874002",
  "573108649068",
  "573152688254",
  "573103022644",
  "573182247785",
  "573114604293",
  "573114848785",
  "573102775891",
  "573172219802",
  "573107955809",
  "573103268249",
  "573246737385",
  "573102022624",
  "573227605819",
  "573228097613",
  "573017987829",
  "573142673104",
  "573125365717",
  "573144904664",
  "573195369053",
  "573162811292",
  "573203975016",
  "573185758440",
  "573133102478",
  "573132108210",
  "573188684956",
  "573213690657",
  "573212006069",
  
  
  
  



];

// Crear un archivo de texto y escribir los datos en él
fs.writeFile('archivo.txt', generarTexto(nombres, prefefs), function (err) {
  if (err) throw err;
  console.log('Archivo creado exitosamente!');
});

// Función para generar el texto a escribir en el archivo
function generarTexto(nombres, prefefs) {
  let texto = '';
  for (let i = 0; i < nombres.length; i++) {
    texto += `BEGIN:VCARD
VERSION:3.0
PRODID:-//Apple Inc.//iOS 11.2.5//EN
N:;${nombres[i]};;;;
FN:A Tiempo 
item1.TEL;type=pref:${prefefs[i]}
REV:2018-04-20T18:34:26Z
END:VCARD

`;
  }
  return texto;
}