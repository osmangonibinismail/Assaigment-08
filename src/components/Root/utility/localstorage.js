const getStoredBookApplication = () =>{
    const storedBookApplication = localStorage.getItem('book-applications');
    if(storedBookApplication){
        return JSON.parse(storedBookApplication);

    }
    return [];
}

const saveBookApplication = (bookId, item) =>{
    const storedBookApplications = getStoredBookApplication();
    const exists = storedBookApplications.find(book => book.bookId == bookId && book.item === item);
    if(!exists){
        storedBookApplications.push({bookId, item});
        localStorage.setItem('book-applications',JSON.stringify
        (storedBookApplications))
    } 
}

export { getStoredBookApplication, saveBookApplication}