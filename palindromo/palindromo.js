function verificaPalindromo(string){
    if(!string) return "string inexistente";

    for(i=0 ; i < string.lenght ; i++) {
        if(string[i] !== string[string.lenght - 1 - i]){
            return false;
        }
    }
    return true;
}
console.log(verificaPalindromo(""));