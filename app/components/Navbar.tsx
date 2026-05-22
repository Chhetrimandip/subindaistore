 export default function Navbar(){
     return(

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center px-8 py-3 rounded-full backdrop-blur-md bg-white/70 dark:bg-black/50 border border-white/20 shadow-lg transition-transform hover:scale-105">
                 <div className="flex gap-8 text-sm font-medium text-gray-800 dark:text-gray-100">
                     <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
                     <a href="/Jersey" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Jerseys</a>
                     <a href="/Balls" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Balls</a>
                     <a href="/Shoes" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Shoes</a>
                     <a href="https://shakyarbin.github.io/Boards/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Past Paper Selector</a>
                     </div>
             </nav>
     )
 }