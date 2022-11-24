const editor = new EditorJS({
    holder: 'editorjs',
});

const pre = document.getElementById("data");
document.getElementById("save").addEventListener("click",()=>{
    editor.save().then((outputData) => {
        pre.textContent = JSON.stringify(outputData, null , "&nbsp");
    }).catch((error) => {
        console.log('Saving failed: ', error)
    });
})