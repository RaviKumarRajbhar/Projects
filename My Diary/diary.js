function saveEntry() {
    var date = document.getElementById('date').value;
    var image = document.getElementById('image').files[0];
    var text = document.getElementById('text').value;

    // Logic to save the entry
    console.log("Date: " + date);
    console.log("Image: " + image.name);
    console.log("Text: " + text);

    
}

document.getElementById('image').addEventListener('change', function() {
    var reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('preview').setAttribute('src', e.target.result);
    }
    reader.readAsDataURL(this.files[0]);
});