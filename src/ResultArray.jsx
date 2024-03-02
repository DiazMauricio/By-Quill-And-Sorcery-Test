import { Blackwood, Blazemont, Fanginor, Ramcaster, Vicroft } from "./assets/IconosCasas";

const RamcasterText = () => {
    return ( 
        <>
            <p>
                ¡Bienvenidos aspirantes a la Casa Ramcaster! Al entrar en esta casa se embarcarán en un viaje de desafío y superación. En esta casa, la disciplina férrea, el honor y la convicción inquebrantable serán los cimientos sobre los que construiremos su fuerza y carácter.
            </p>
            <p>
                El camino será arduo, una batalla constante contra sus propios límites. Pero no estarán solos, desde el momento en que entran, sus compañeros seremos su familia y apoyo, y como tal los instruiremos para que desarrollen sus capacidades al máximo, forjando en ustedes la capacidad de superar cualquier obstáculo. La recompensa por su esfuerzo será la satisfacción de superar sus metas y la confianza inquebrantable en sus propias habilidades. 
            </p>
            <p>
                Si buscan una casa que los desafíe a alcanzar el máximo potencial, la casa Ramcaster será tu hogar.
            </p>
        </>
     );
}
const VicroftText = () => {
    return ( 
        <>
            <p>
                Saludos, aspirantes a la casa Vicroft.
            </p>
            <p>
                A esta casa le complace recibir a aquellos que sepan apreciar la búsqueda incesante por la excelencia. En Vicroft, no nos conformamos con la mediocridad, esta casa es un crisol donde se forjan los magos y brujas más extraordinarios que el mundo haya conocido.
            </p>
            <p>
                Aspiramos a la maestría y a desentrañar los misterios más profundos de la magia. La búsqueda del conocimiento es nuestro credo, una llama inextinguible que nos impulsa a explorar más allá de lo conocido. En Vicroft, no toleramos la apatía ni la complacencia. Fomentamos un ambiente de crítica constructiva, debate intelectual y maestría en cada disciplina. 
            </p>
            <p>
                Si tu corazón arde con la pasión por el saber, si tu mente se deleita con la complejidad de la magia y si tu espíritu busca romper las barreras del conocimiento, entonces la casa Vicroft te abre sus puertas.
            </p>
        </>
     );
}

const FanginorText = () => {
    return ( 
        <>
            <p>
                ¡Te damos la bienvenida compañero! 
            </p>
            <p>
                En Fanginor la justicia es nuestro estandarte, la unidad nuestra fuerza y el respeto nuestra brújula. Somos una casa unida por estos ideales, donde cada miembro es una pieza invaluable en la construcción del futuro. Juntos, forjamos un espíritu de camaradería, donde la colaboración nos impulsa a alcanzar nuestros objetivos.            </p>
            <p>
                Pero debes saber, compañero, que en Fanginor no hay lugar para la indiferencia. Somos los que nos enfrentamos a la injusticia, los futuros pilares de la sociedad y los que predicamos con el ejemplo. Si tu mano se extiende para ayudar a los demás y si tu espíritu esta listo para luchar por tus camaradas, entonces Fanginor te invita a unirte a la manada. 
            </p>
            <p>
                ¡Prepárate! porque esta hermandad inquebrantable luchara por lo que es correcto, por construir un futuro.
            </p>
        </>
     );
}

const BlazemontText = () => {
    return ( 
        <>
            <p>
                ¿Eres un alma inquieta buscando la oportunidad de ser tu mismo? Solo estas a un paso de distancia. En Blazemont, la libertad arde en nuestros corazones, la expresión fluye en nuestras venas y la ambición nos impulsa hacia las estrellas. No somos una simple casa, somos una familia de audaces soñadores que comparten sus ideas sin miedo y persiguen sus pasiones con convicción.
            </p>
            <p>
                Olvídate de las estructuras y las tradiciones que te atan. En Blazemont, serás capaz de expresar tu verdad sin reservas, a desafiar lo establecido y a convertir tu ambición en logros extraordinarios. Aquí, la libertad es nuestro estandarte y la conquista nuestra recompensa.
            </p>
            <p>
                Únete a nuestra casa y enciende la llama de tu potencial. Comparte tu talento, explora tu creatividad y atrévete a soñar en grande.
            </p>
        </>
     );
}

const BlackwoodText = () => {
    return ( 
        <>
            <p>
                ¡Sean bien recibidos a la casa Blackwood!¿Eres un alma errante en busca de un refugio donde la verdad no se doblegue y la resiliencia se convierta en un arte? Aquí en Blackwood es donde la oscuridad se convierte en un lienzo para la verdad, la quietud en un trono de sabiduría y la capacidad de sobreponerse a las adversidades se transforma en un himno a la inmortalidad.
            </p>
            <p>
                Somos una comunidad unida por la búsqueda de lo que nos cuesta percibir, donde las diferencias se valoran, donde la empatía florece y las cicatrices se convierten en fuente de poder. Si tu alma anhela la verdad sin adornos, las puertas de Blackwood se abrirán para recibirte.
            </p>
            <p>
                Únete a nosotros, alma valiente, y forja tu destino en la Casa Blackwood. Un lugar donde la oscuridad se convierte en luz y la armonía se alza como un estandarte de triunfo.
            </p>
        </>
     );
}


export const ResultsArray = [
    {
        "icon": Ramcaster,
        "title": "Ramcaster",
        "subtitle": "Competencia & Desarrollo",
        "text": RamcasterText,
        "colors": ["#241414", "#A83F3B"]
    },
    {
        "icon": Vicroft,
        "title": "Vicroft",
        "subtitle": "Saber & Perfección",
        "text" : VicroftText,
        "colors": ["#1C1F28", "#C4A041"]
    },
    {
        "icon": Fanginor,
        "title": "Fanginor",
        "subtitle": "Justicia & Unidad",
        "text": FanginorText,
        "colors": ["#261E1A", "#527C9A"]
    },
    {
        "icon": Blazemont,
        "title": "Blazemont",
        "subtitle": "Libertad & ambición",
        "text": BlazemontText,
        "colors": ["#122525", "#A05B7C"]
    },
    {
        "icon": Blackwood,
        "title": "Blackwood",
        "subtitle": "Verdad & Resiliencia",
        "text": BlackwoodText,
        "colors": ["#262429", "#808A40"]
    }
]
