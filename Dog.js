// Create the Dog class here
import dogsData from './data.js'

class Dog {
    constructor(data) {
        Object.assign(this, data)        
    }
    
    getDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        return `
        <div class="dog-info">
            <h4 class="dog-title">${name}, ${age}</h4>
            <div class="dog-bio">${bio}</div>
        </div>
        <img class="profile-pic" src=${avatar}>       
        `        
    }
    setMatchStatus(bool) {
        this.hasBeenLiked = bool // returning accept or reject
        this.hasBeenSwiped = true //because it was clicked
    }
    getStampHtml() {
        if (this.hasBeenLiked) {
            return `
            <img class="badge" src="images/badge-like.png">
            `
        } else {
            return `
            <img class="badge" src="images/badge-nope.png">
            `
        }
    }
}

export default Dog
//
//        name: "Rex",
//        avatar: "images/dog-rex.jpg",
//        age: 25,
//        bio: "Art. Literature. Natural wine. Yoga.",
//        hasBeenSwiped: false,
//        hasBeenLiked: false
//        
        
        
