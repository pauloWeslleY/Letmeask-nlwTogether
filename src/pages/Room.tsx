import logoImg from '../assets/images/logo.svg'

export function Room() {
   return (
		<div id="page-room">
			<header>
				<div className="content">
               <img src={logoImg} alt="Letmeask" />
               <div>codigo</div>
				</div>
         </header>

         <main className="content">
            <div className="room-title">
               <h1>Sala React</h1>
               <span>4 pergunta</span>
            </div>

            <form>
               {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
            </form>
         </main>
		</div>
	);
}