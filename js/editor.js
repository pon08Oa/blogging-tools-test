const editor = new EditorJS({
    holder: 'editorjs',
    tools: {
        header: {
            class: Headers,
            config: {
                placeholder: "見出しを入力してください",
                defaultLevel: 2,
            }
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
    },
    minHeight: 30,
});

const pre = document.getElementById("data");
document.getElementById("save").addEventListener("click",()=>{
    editor.save().then((outputData) => {
        pre.textContent = JSON.stringify(outputData, null , "  ");
    }).catch((error) => {
        console.log('Saving failed: ', error)
    });
})