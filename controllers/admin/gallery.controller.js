//  showGallery()
// │      showAddGalleryPage()
// │      uploadImage()
// │      deleteImage()

async function add(req, res) {
    res.render('admin/gallery-form', {
        admin:req.admin,
        currentPage: 'gallery',
    })
}

module.exports = {
    add,
}