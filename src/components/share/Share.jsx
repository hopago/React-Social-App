import './share.css';
import { PermMedia, Label,Room, EmojiEmotions } from '@material-ui/icons';


export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/1.png" alt="" className="shareProfileImg" />
                <div className="shareInputWrapper">
                  <input placeholder='How do you feel, Hopago?' className="shareInput" />
                </div>
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                      <PermMedia htmlColor="#40E0D0" className='shareIcon' />
                      <div className="shareOptionText">Photo | Video</div>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="#CCCCFF" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="#9FE2BF" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="#FFBF00" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareBtn">Share</button>
            </div>
        </div>
    </div>
  )
}
