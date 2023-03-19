const router = require("express").Router()
const fs = require('fs')
const videoJSON = require('../../models/videos.json')

let videoData = videoJSON

router
    .post("/videos/:id/comments", (req, res) => {
        const videoId = req.params.id
        const selectedVideo = videoData.find(video => video.id === videoId)
        newComment={
            "name": req.body.name,
            "comment": req.body.comment,
            "id": req.body.id,
            "likes": 0,
            "timestamp": req.body.timestamp
        }
        selectedVideo.comments.push(newComment)
        //find the video in the array and reassign old data to new data with new comment
        videoData.map(data => {
            if (data.id === selectedVideo.id){
                return data = selectedVideo
            }
        })
        fs.writeFile(__dirname + '../../models/videos.json', JSON.stringify(videoData, null, 2), (err) => {
            if (err){
                console.log(err)
            } else {
                res.status(200).send(newComment)
            }
        })
        
    })

    .delete("/videos/:videoId/comments/:commentId", (req, res) => {
        const videoId = req.params.videoId
        const commentId = req.params.commentId
        const selectedVideo = videoData.find(video => video.id === videoId)
        const selectedComment = selectedVideo.comments.find(comment => comment.id === commentId)
        const commentIndex = selectedVideo.comments.indexOf(selectedComment)
        selectedVideo.comments.splice(commentIndex,1)
        //find the video in the array and reassign old data to new data without deleted comment
        videoData.map(data => {
            if (data.id === selectedVideo.id){
                return data = selectedVideo
            }
        })
        fs.writeFile(__dirname + '../../models/videos.json', JSON.stringify(videoData, null, 2), (err) => {
            if (err){
                console.log(err)
            } else {
                res.status(200).send(selectedComment)
            }
        })
    })

module.exports = router