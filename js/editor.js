const editor = new EditorJS({
    holder: 'editorjs',
    tools: {
        header: {
            class: Headers,
        },
        list: {
            class: List,
        },
        checklist: {
            class: Checklist,
        },
        quote: {
            class: Quote,
        },
        code: {
            class: CodeTool,
        },
        embed: {
            class: Embed,
        }
    },
    minHeight: 80,
});

const pre = document.getElementById("data");
document.getElementById("save").addEventListener("click",()=>{
    editor.save().then((outputData) => {
        pre.textContent = JSON.stringify(outputData, null , "  ");
    }).catch((error) => {
        console.log('Saving failed: ', error)
    });
})
