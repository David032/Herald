import { PimoroniBadger2040W } from "@devicescript/drivers"
import { font8, Image, scaledFont } from "@devicescript/graphics"

export class Namebadge {
    
    /**
     *
     */
    constructor() {
        
    }

    public DisplayName : string;
    public Email : string;
    public ContactNumber : string;
    public Title: string;

    //Photo should be scaled to 128*128 pixels
    public Photo: Image;

    public async Draw(badger:PimoroniBadger2040W) {
        const disp = await badger.startDisplay()
        const smallText = scaledFont(font8(),1)
        const largeText = scaledFont(font8(), 2)

        disp.image.print(this.DisplayName,10,10,1,largeText);
        disp.image.print(this.Title,10,30,1,largeText)
        disp.image.drawLine(10,50,182,50,1);
        disp.image.print(this.Email,10,50,1,smallText);
        disp.image.print(this.ContactNumber,10,60,1,smallText);
        await disp.show();
    }
}