var btnUploadText = 'Upload Image';
  $(document).ready(function () {
    $("#uploadButton").text(btnUploadText)
    $(".imageShow").hide()
    $('#uploadButton').click(function () {
      $('#imagePic').click();
    });
    $("#imagePic").on("change", function (e) {
      var file = e.target.files[0]; //Obtain Imaage Sources
      var fileTypes = ["bmp", "jpg", "png", "jpeg"];
      var bTypeMatch = false
      for (var i = 0; i < fileTypes.length; i++) {
        var start = file.name.lastIndexOf(".");
        var fileType = file.name.substring(start + 1);
        if (fileType.toLowerCase() == fileTypes[i]) {
          bTypeMatch = true;
          break;
        }
      }
      if (bTypeMatch) {
        if (file.size <= 1024 * 1024 * 10) {
          var reader = new FileReader();
          reader.readAsDataURL(file); // Reading Document
          // Render File
          reader.onload = function (arg) {
            $(".imageShow").show()
            $("#uploadImageShow").attr("src", arg.target.result)
            btnUploadText = 'Reupload Image'
            $("#uploadButton").text(btnUploadText)
          }
        } else {
          alert('No bigger than 10m Image');
          emptyImageUpload("#imagePic")
          $("#uploadImageShow").attr("src", "")
          $(".imageShow").hide()
          btnUploadText = 'Upload Image'
          $("#uploadButton").text(btnUploadText)
          return false;
        }
      } else {
        alert('Image style only: bmp，jpg，png，jpeg');
        emptyImageUpload("#imagePic")
        $("#uploadImageShow").attr("src", "")
        $(".imageShow").hide()
        btnUploadText = 'Upload Image'
        $("#uploadButton").text(btnUploadText)
        return false;
      }
    });
  })
  //Clear Upload Image Information
  function emptyImageUpload(selector) {
    var fi;
    var sourceParent;
    if (selector) {
      fi = $(selector);
      sourceParent = fi.parent();
    } else {
      return;
    }
    $("<form id='tempImgForm'></form>").appendTo(document.body);

    var tempImgForm = $("#tempImgForm");
    tempImgForm.append(fi);
    tempImgForm.get(0).reset();
    sourceParent.append(fi);
    tempImgForm.remove();
  }