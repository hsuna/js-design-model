/*
 * 代理（Proxy）
 */
class Image {
    constructor() {
        if(new.target == Image) {
            throw new Error('Image is an interface.');
        }
    }
    showImage() {}
}

class HighResolutionImage extends Image {
    constructor(imageURL) {
        super();
        this.imageURL = imageURL;
        this.startTime = +new Date();
        this.width = 600;
        this.height = 600;
    }
    isLoad(){
        // 模拟图片加载，延迟 3s 加载完成
        let endTime = +new Date();
        return endTime - this.startTime > 3000;
    }
    getHeight() {
        return this.height;
    }

    getWidth() {
        return this.width;
    }
    showImage() {
        console.log("Real Image: " + this.imageURL);
    }
}

class ImageProxy extends Image {
    constructor(highResolutionImage) {
        super();
        this.highResolutionImage = highResolutionImage;
    }
    showImage() {
        if(!this.highResolutionImage.isLoad()) {
            console.log("Temp Image: " + this.highResolutionImage.getWidth() + " " + this.highResolutionImage.getHeight());
            setTimeout(_=>{
                this.showImage();
            }, 400);
            return;
        }
        this.highResolutionImage.showImage();
    }
}

export {
    ImageProxy,
    HighResolutionImage
}