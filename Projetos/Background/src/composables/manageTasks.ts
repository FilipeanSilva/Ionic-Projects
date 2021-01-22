import { 
    FilesystemDirectory, 
    FilesystemEncoding, 
    Plugins } from '@capacitor/core'

const FILE_PATH = 'numbers.txt'
const RND_MIN = 10000
const RND_MAX = 99999
const {Filesystem} = Plugins;

let num1: number, num2: number;

function randomGenerator(){
    return Math.floor(Math.random() * RND_MAX) + RND_MIN;
}

async function ReadFile() {
    const fileResult = await Filesystem.readFile({
        path: FILE_PATH,
        directory: FilesystemDirectory.Documents,
        encoding: FilesystemEncoding.UTF8
    });

    return fileResult;
}

async function CreateFile() {
    return await Filesystem.writeFile({
        path: FILE_PATH,
        data: randomGenerator().toString() + ' ' + randomGenerator().toString(),
        directory: FilesystemDirectory.Documents,
        encoding: FilesystemEncoding.UTF8
        })
}

async function UpdateFile() {
    await Filesystem.writeFile({
        path: FILE_PATH,
        data: num1 + ' ' + num2,
        directory: FilesystemDirectory.Documents,
        encoding: FilesystemEncoding.UTF8
    })
}

export function manageTasks() {
    
    let interval: any

    const startTask = async () => { 

        interval = setInterval(async () => { 
            try{   
                //TENTA LER DO FICHEIRO
                const fileResult = ReadFile();
                //o fileResult devolvido tem um membro data que é string
                const result = (await fileResult).data.split(" ");
                num1 = parseInt(result[0])
                num2 = parseInt(result[1])
                
            }
            catch(ex){
                console.log(ex) // Nao conseguiu ler. Cria um ficheiro novo
                CreateFile();
            
                //AQUI JA TEM FICHEIRO DE CERTEZA E PODE LER
                const fileResult1 = ReadFile();

                const result1 = (await fileResult1).data.split(" ");
                num1 = parseInt(result1[0])
                num2 = parseInt(result1[1])
            }

            // console.log(num1 + " " + num2)

            //INCREMENTA NUM 1 E DECREMENTA NUM 2 E ESCREVE NO FICHEIRO

            num1++;
            num2--;
            UpdateFile();
            
            //APANHA OS ELEMENTOS DA VISTA E ALTERA LHES O VALOR
            const ElmNum1 = document.getElementById('num1');
            const ElmNum2 = document.getElementById('num2');
            if(ElmNum1) //tem de verificar se o elemento existe
                ElmNum1.textContent = num1.toString();
            if(ElmNum2)
                ElmNum2.textContent = num2.toString();

                
         }, 10000);
        
    }

    // Vai ser evocada quando clica no botao stop da view
    function stopTask() {
        clearInterval(interval); //limpa o intervalo definido para a funcao startTask
    }

    return {
        startTask, stopTask
    } 

}