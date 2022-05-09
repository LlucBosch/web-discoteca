import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export let renderCkeditor = () => {
    // Or using the CommonJS version:
    // const ClassicEditor = require( '@ckeditor/ckeditor5-build-classic' );

    window.editors = {};
    document.querySelectorAll('.editor').forEach((node, index) => {
        ClassicEditor.
            create(node, {}).
            then(newEditor => {
                window.editors[index] = newEditor;
            });
    });

}

