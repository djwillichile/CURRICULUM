const experienceDetails = [
    {
        jobTitle: 'Investigador',
        company: 'Universidad de Talca',
        year: '2022 - 2023',
        description: 'Proyecto ANID FSEQ210004 para mejorar la gestión de los recursos hídricos en la agricultura bajo condiciones de sequía y cambio climático'
    },
    {
        jobTitle: 'Profesor colaborador',
        company: 'Universidad Mayor',
        year: '2020',
        description: 'Cursos Procesamiento y Aplicaciones de Datos Termales, Magíster en Teledetección, Facultad de Ciencias'
    },
    {
        jobTitle: 'Investigador',
        company: 'Universidad de Chile',
        year: '2019 - 2020',
        description: 'Proyecto CORFO 16PTECFS66647-5 Aspectos sanitarios de sostenibilidad y uso eficiente de recursos en nogal en la zona centro-sur de Chile'
    },
    {
        jobTitle: 'Profesor colaborador',
        company: 'Universidad de Chile, Región Metropolitana',
        year: '2019 - 2022',
        description: 'Cursos Fundamentos de sistemas de Información Geográfica (2019-2021) y Fundamentos de Teledetección (2020-2022), Facultad de Ciencias Agronómicas'
    },
    {
        jobTitle: 'Investigador',
        company: 'Universidad de Talca',
        year: '2018 - 2019',
        description: 'Proyecto FIA PYT-2017-0877 Mapa dinámico a escala diaria de la Evapotranspiración de Referencia (ETo) para determinar las necesidades de riego en Chile'
    },
    {
        jobTitle: 'Apoyo técnico',
        company: 'Empresa Nacional del Petróleo (ENAP)',
        year: '2017 - 2018',
        description: 'Iniciativa Microred de Vigilancia Ciudadana para el Mapeo de la Calidad del Aire'
    },
    {
        jobTitle: 'Profesional de apoyo',
        company: 'Instituto de Investigaciones Agropecuarias INIA',
        year: '2016 - 2017',
        description: 'Proyecto FIC Regional 30170072-0 Plataforma de zonificación agrometeorológica para aptitud de cultivos y gestión de riego en Arica y Parinacota'
    }
];


const fullExperienceDetails = [
    {
        jobTitle: 'Investigador',
        company: 'Universidad de Talca',
        year: '2022 - 2023',
        description: 'Proyecto ANID FSEQ210004 Desarrollo de una plataforma inteligente basada en información meteorológicas y satelital para mejorar la gestión de los recursos hídricos en la agricultura bajo condiciones de sequía y cambio climático'
    },
    {
        jobTitle: 'Profesor de cátedra',
        company: 'Universidad de Chile',
        year: '2022',
        description: 'Curso Estadística Aplicada a los Recursos Naturales Renovables II, Magíster en Gestión Territorial de Recursos Naturales Facultad de Ciencias Agronómicas'
    },
    {
        jobTitle: 'Profesor de cátedra',
        company: 'Universidad Mayor',
        year: '2022',
        description: 'Curso Ingeniería en Eficiencia Energética, Facultad de Ciencias, Ingeniería y Tecnología'
    },
    {
        jobTitle: 'Asesor y colaborador',
        company: 'Centro de Estudios Avanzados en Fruticultura',
        year: '2020 - 2021',
        description: "CONICYT R17F10007 Sistema de Simulación Agronómica e Información Agrometeorológica para la Región de O'Higgins SAIA-CEAF"
    },
    {
        jobTitle: 'Profesor colaborador',
        company: 'Universidad Mayor',
        year: '2020',
        description: 'Cursos Procesamiento y Aplicaciones de Datos Termales, Magíster en Teledetección, Facultad de Ciencias'
    },
    {
        jobTitle: 'Investigador',
        company: 'Servicio Agrícola y Ganadero',
        year: '2019 - 2021',
        description: 'Estudio de modelamiento de distribución espacial para tres enfermedades exóticas animales. Convenio de colaboración SAG/LARES-UChile. División de Protección Pecuaria'
    },
    {
        jobTitle: 'Profesor instructor',
        company: 'Universidad de Chile',
        year: '2019 - 2022',
        description: 'Cursos Fundamentos de sistemas de Información Geográfica (2019-2022), Fundamentos de Teledetección (2020-2022), Teoría de Sistemas y Modelamiento Ambiental (2019-2021), Física II (2019-2022) y Física Ambiental (2019-2022), Física Aplicada (2022), Percepción Remota (2022), Facultad de Ciencias Agronómicas'
    },
    {
        jobTitle: 'Investigador',
        company: 'Universidad de Chile',
        year: '2019 - 2021',
        description: 'Proyecto CORFO 16PTECFS66647-5 Aspectos sanitarios de sostenibilidad y uso eficiente de recursos en nogal en la zona centro-sur de Chile'
    },
    {
        jobTitle: 'Investigador',
        company: 'Universidad de Chile',
        year: '2019 - 2021',
        description: 'Estudio de modelamiento de nicho ecológico para diez plagas cuarentenarias priorizadas por el Servicio Agrícola y Ganadero. Convenio de colaboración SAG/LARES-UChile. Laboratory for Research in Environmental Sciences (LARES), Facultad de Ciencias Agronómicas'
    },
    {
        jobTitle: 'Profesional de apoyo',
        company: 'Instituto de Investigaciones Agropecuarias INIA',
        year: '2019',
        description: 'Proyecto CORFO 18BPCR-104195 Incremento de la competitividad de la producción frutícola de La Araucanía a través de la gestión hídrica inteligente'
    },
    {
        jobTitle: 'Personal Técnico',
        company: 'Universidad de Concepción',
        year: '2018 - 2019',
        description: 'Proyecto FONDECYT Nº 1181374 A Spatially explicit approach for an integrated assessment of ecological integrity and ecosystem services in agro-forestry landscapes'
    },
    {
        jobTitle: 'Asistente de Investigación',
        company: 'Universidad de Talca',
        year: '2018 - 2019',
        description: 'Proyecto FIA PYT-2017-0877 Mapa dinámico a escala diaria de la Evapotranspiración de Referencia (ETo) para determinar las necesidades de riego en Chile'
    },
    {
        jobTitle: 'Asistente de Investigación',
        company: 'Universidad de Chile',
        year: '2016 - 2019',
        description: 'Proyecto FONDECYT Nº 1161809 Microclima urbano y confort térmico humano en espacios urbanos de la ciudad de Santiago de Chile alrededor de campus universitarios'
    },
    {
        jobTitle: 'Geógrafo',
        company: 'Municipalidad de Estación Central',
        year: '2018',
        description: 'Proyecto Cartografía social, Programa Comunal de Promoción de Salud, Unidad de Estudios y Proyectos DIDECO'
    },
    {
        jobTitle: 'Apoyo técnico',
        company: 'Empresa Nacional del Petróleo (ENAP)',
        year: '2017 - 2018',
        description: 'Iniciativa Microred de Vigilancia Ciudadana para el Mapeo de la Calidad del Aire'
    },
    {
        jobTitle: 'Ayudante de Cátedra',
        company: 'Universidad de Chile',
        year: '2011 - 2018',
        description: 'Ramos Sistemas de Información Geográfica (2018), Taller de Percepción Remota (2017), Física II (2015-2017), Física Ambiental (2012-2018), Teoría de sistema y Modelamiento Ambiental (2014-2016), Estadística I (2014-2015), Calculo Numérico (2014-2015), Programación Computacional (2011-2015), Facultad de Ciencias Agronómicas'
    },
    {
        jobTitle: 'Asistente de Investigación',
        company: 'Universidad de Talca',
        year: '2018',
        description: 'Proyecto A2C2 Escenarios de Cambio Climático en la Región del Maule en Alta Resolución para la Evaluación de Impactos en la Agricultura, Programa de Investigación de Excelencia Interdisciplinar Adaptación de la Agricultura al Cambio Climático'
    },
    {
        jobTitle: 'Profesional de apoyo',
        company: 'Instituto de Investigaciones Agropecuarias INIA',
        year: '2016 - 2017',
        description: 'Proyecto FIC Regional 30170072-0 Plataforma de zonificación agrometeorológica para aptitud de cultivos y gestión de riego en Arica y Parinacota'
    },
    {
        jobTitle: 'Profesor De Matemáticas, Física y Geografía',
        company: 'Preuniversitario Popular Antumapu',
        year: '2010 - 2017',
        description: ''
    },
    {
        jobTitle: 'Profesor asistente',
        company: 'Universidad de La Serena',
        year: '2016',
        description: 'Curso Geoestadística Aplicada, Dpto. Cs. Ambientales y Recursos Naturales Renovables, Escuela de Agronomía'
    },
    {
        jobTitle: 'Analista de Datos',
        company: 'Compañía Chilena de Tabaco',
        year: '2015 - 2016',
        description: 'Proyecto Zonificación de cultivo del tabaco en la zona central de Chile'
    },
    {
        jobTitle: 'Ayudante de Cátedra',
        company: 'Universidad de Chile',
        year: '2015 - 2016',
        description: 'Curso Sistemas de Información Geográfica y Teledetección, Facultad de Ciencias'
    },
    {
        jobTitle: 'Director General',
        company: 'Preuniversitario Popular Antumapu',
        year: '2011 - 2016',
        description: ''
    },
    {
        jobTitle: 'Instalador y programador estaciones meteorológicas CAMPBELL',
        company: 'Universidad de Chile',
        year: '2014 - 2015',
        description: 'Proyecto redes de información meteorológica, Facultad de Ciencias Agronómicas'
    },
    {
        jobTitle: 'Mantenimiento y configuración de sistemas y redes computacionales',
        company: 'Independiente',
        year: '2006 - 2015',
        description: ''
    },
    {
        jobTitle: 'Ayudante de Fundamentos básicos de Teledetección',
        company: 'Universidad de Chile',
        year: '2014',
        description: 'Diplomado en Geomática Aplicada, Depto. de Cs. Ambientales y Recursos Naturales'
    },
    {
        jobTitle: 'Encargado de análisis y procesamiento de datos meteorológicos',
        company: 'Universidad de Chile',
        year: '2013',
        description: 'Proyecto de análisis y modelación pluviométrica para el secano interior de la Región del Maule y Proyecto de zonificación bioclimática para la Región del Maule, Laboratory for Research in Environmental Sciences (LARES), Facultad de Ciencias Agronómicas'
    }
];
