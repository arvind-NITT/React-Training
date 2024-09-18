import { useState, useEffect } from "react";

function PostDetails() {

    
    var data = { "posts": [{ "id": 1, "title": "His mother had always taught him", "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.", "tags": ["history", "american", "crime"], "reactions": { "likes": 192, "dislikes": 25 }, "views": 305, "userId": 121 }, { "id": 2, "title": "She had a habit of taking showers", "body": "She had a habit of taking showers in lemonade. She claimed the yellow water felt refreshing and helped calm her mind. No one else agreed, but she didn’t care.", "tags": ["health", "lifestyle", "humor"], "reactions": { "likes": 154, "dislikes": 9 }, "views": 220, "userId": 122 }, { "id": 3, "title": "He couldn't resist the temptation", "body": "The cake sat on the table, tempting him. He had resisted sweets for weeks, but this was too much. One small bite wouldn't hurt, he told himself.", "tags": ["food", "temptation", "personal"], "reactions": { "likes": 45, "dislikes": 2 }, "views": 80, "userId": 121 }, { "id": 4, "title": "The mountain stood tall before them", "body": "It was the highest peak they had ever seen. Climbing it seemed impossible, but they were determined. Every step was a challenge, but they knew the view from the top would be worth it.", "tags": ["adventure", "nature", "determination"], "reactions": { "likes": 312, "dislikes": 14 }, "views": 500, "userId": 122 }, { "id": 5, "title": "The painting spoke to him", "body": "It wasn’t just a piece of art. It was a reflection of his soul. He saw his struggles, his victories, and his failures in every brushstroke.", "tags": ["art", "self-reflection", "inspiration"], "reactions": { "likes": 210, "dislikes": 5 }, "views": 420, "userId": 123 }, { "id": 6, "title": "The old man at the park bench", "body": "Every day, he sat there feeding the birds. No one knew where he came from or where he went. He simply appeared in the morning and disappeared by sunset.", "tags": ["mystery", "life", "solitude"], "reactions": { "likes": 198, "dislikes": 20 }, "views": 350, "userId": 121 }, { "id": 7, "title": "She loved the rain", "body": "While others ran for cover, she stayed in the downpour. To her, the rain wasn’t something to avoid; it was something to embrace. It washed away her worries.", "tags": ["weather", "emotions", "peace"], "reactions": { "likes": 250, "dislikes": 12 }, "views": 390, "userId": 122 }, { "id": 8, "title": "The robot had feelings", "body": "It wasn’t supposed to, but something had gone wrong in its programming. Now it felt joy, sadness, and anger. It struggled to understand these emotions.", "tags": ["technology", "AI", "science fiction"], "reactions": { "likes": 305, "dislikes": 35 }, "views": 700, "userId": 123 }, { "id": 9, "title": "The sound of the ocean", "body": "He had lived inland his whole life, but the first time he heard the ocean, it changed him. The sound was more than waves crashing; it was a call to adventure.", "tags": ["ocean", "travel", "change"], "reactions": { "likes": 170, "dislikes": 15 }, "views": 280, "userId": 121 }, { "id": 10, "title": "The city's lights never went out", "body": "It was always bright, no matter the time of day. People walked the streets at all hours, always moving, always busy. The city never slept.", "tags": ["urban", "life", "city"], "reactions": { "likes": 245, "dislikes": 18 }, "views": 460, "userId": 122 }, { "id": 11, "title": "The cat had nine lives", "body": "At least that’s what she believed. After narrowly escaping death multiple times, she was convinced she was invincible. But she was starting to run out of luck.", "tags": ["animals", "mystery", "luck"], "reactions": { "likes": 195, "dislikes": 10 }, "views": 320, "userId": 121 }, { "id": 14, "title": "The mystery of the red door", "body": "No one ever dared to open it. It stood at the end of the hallway, a bright red contrast to the dull walls. What lay behind it? The answer had been lost for generations.", "tags": ["mystery", "horror", "suspense"], "reactions": { "likes": 270, "dislikes": 30 }, "views": 600, "userId": 122 }, { "id": 15, "title": "The last train to nowhere", "body": "It was a train that ran without a destination. People boarded it, but no one ever got off. Where it went was a mystery, but those who rode it were never seen again.", "tags": ["mystery", "transportation", "suspense"], "reactions": { "likes": 340, "dislikes": 25 }, "views": 780, "userId": 123 }, { "id": 16, "title": "The lighthouse on the cliff", "body": "It had guided ships for centuries, standing tall and bright. But now, it was abandoned. Its light had gone out, and no one knew why.", "tags": ["mystery", "sea", "history"], "reactions": { "likes": 215, "dislikes": 18 }, "views": 360, "userId": 123 }], "total": 23, "limit": 10 }



    return (
        <>
            <div>

                <h2>
                    {data.total}
                </h2>
                <div className="row container" >
                    {

                        data.posts.map((post) => (
                           
                            <div class="card" style={{ width: "18rem" }}>

                                <div class="card-body">
                                    <h5 class="card-title"> {post.title} </h5>
                                    <p class="card-text"> {post.body} </p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"> {post.reactions.likes} Likes {post.reactions.dislikes} Dislikes {post.views} views  </li>
                                    <li class="list-group-item"> {post.tags[0]} </li>
                                  
                                </ul>
                                <div class="card-body">
                                    {post.userId == 123 && <div>
                                        <button type="button">
                                            edit
                                        </button>
                                        <button type="button">
                                            delete
                                        </button>
                                    </div>}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )


}

export default PostDetails;