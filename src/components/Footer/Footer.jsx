const Footer = () => {
  return (
  

<footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span className="text-sm text-white sm:text-center dark:text-amber-400  ">Todos direitos reservados a Alfredo Silva  <a href="https://flowbite.com/" className="hover:underline">™</a>
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-amber-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>


  );
}


export default Footer;
