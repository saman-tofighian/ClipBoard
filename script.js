const textArea = document.getElementById('text')

    const buttonCopy = document.getElementById('button')

    buttonCopy.addEventListener('click' , ()=>{
        if(
            (textArea.value != '')
        ){
            let valueTextArea = textArea.value
            textArea.select()

            navigator.clipboard.writeText(valueTextArea)

            buttonCopy.innerText = 'copied'

            buttonCopy.style.backgroundColor = 'rgb(10, 74, 126)'

            setTimeout(()=>{
                buttonCopy.innerText = 'copy'

                buttonCopy.style.backgroundColor = '#28d'

                textArea.value = ''

                textArea.focus()
            }, 1600)
            }
            else{
                alert("Please Write SomeThing .... !")
            }
    })