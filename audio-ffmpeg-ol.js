    /**
     * Responds to any HTTP request.
     *
     * @param {!express:Request} req HTTP request context.
     * @param {!express:Response} res HTTP response context.
     */
    function ffmpegcrush(fileurl) {

        var ffmpeg = require('fluent-ffmpeg');
        var command  = ffmpeg();
        const fetch = require('node-fetch');
        const request = require('request');
        const axios = require('axios');
        const fs = require('fs');
        var promise = require('promise');

        const ffprobe = require('remote-ffprobe');
        console.log("test")
        ffprobe(fileurl).then(metadata => {
            console.log(metadata);
        });

        
        // fetch('https://octodex.github.com/images/Fintechtocat.png')
        //     .then(res => res.buffer())
        //     .then(buffer => fileType(buffer))
        //     .then(type => {
        //         console.log(type);
//         //     });

//             fetch('https://github.com/').then(res => {
// 	console.log(res.ok);
// 	console.log(res.status);
// 	console.log(res.statusText);
// 	console.log(res.headers.raw());
// 	console.log(res.headers.get('content-type'));
// });

    //     console.log(fileurl);
    //     // let response = fetch(fileurl)
    //     // request('http://www.google.com', function (error, response, body) {
    //     axios.get(fileurl, {
    //         validateStatus: status => status === 200,
    //         responseType: "stream"
    //     }).then(function (response) {
    //         var resPipe = response.data.pipe(fs.createWriteStream('test.wav'));
    //         console.log(resPipe);
    //         var command = ffmpeg.ffprobe(resPipe, function(err, metadata) {
    //             console.log(err)
    //             console.log(metadata)
    //                 if (err) return err
    //                 return {"bitrate": metadata,
    //                         "sample_rate": JSON.stringify(metadata),
    //                         "length": JSON.stringify(err)};
    //         });
    //     }).catch(error => {
    //         console.log("ERROR");
    //         res.status(500).json(error);
    //     });
    //     // Fetch the original image
    // fetch(fileurl)
    // // Retrieve its body as ReadableStream
    // .then(response => {
    //     var file = fs.createWriteStream("."); // /tmp in google cloud functions
    //     file.write()
    //     console.log(response)
    //     console.log(JSON.stringify(response))
    //     console.log(response.body)
    //     console.log(typeof response.body)
    //     const reader = response.body;
    //     console.log(reader);
    //     console.log("test")
    //     var x = command.ffprobe(reader, function(err, metadata) {
    //         console.log(err)
    //         console.log(metadata)
    //             if (err) return err
    //             return {"bitrate": metadata,
    //                     "sample_rate": JSON.stringify(metadata),
    //                     "length": JSON.stringify(err)};
    //     });

    // });
    //     let response = request(fileurl, function(error, res, body) {
    //         console.log("test response");
    //         console.log(error);
    //         // console.log(res.ok);
    //         // console.log(JSON.stringify(res));
    //         // console.log(body);
    //         // console.log(res.ok);
    //         // console.log(res.status);
    //         // console.log(res.statusText);
    //         // JSON.stringify(res));
    //     // console.log(JSON.stringify(res.body));
    //     var resPipe = res.pipe(fs.createWriteStream("input.wav"))
    //     // return new Promise(function(resolve,reject) {
    //     //     try {
    //     //         resolve(res.pipe(fs.createWriteStream("input.wav")));
    //     //     } catch (err) {
    //     //         reject(err);
    //     //     }
    //     // });
    //     // console.log(JSON.stringify(fs))
    //     console.log("ok")
    //     command.ffprobe(resPipe, function(err, metadata) {
    //         console.log(err)
    //         console.log(metadata)
    //             if (err) return err
                
                
    //             return {"bitrate": metadata,
    //                     "sample_rate": JSON.stringify(metadata),
    //                     "length": JSON.stringify(err)};
    //     });
        
    //     console.log(typeof a);
    //     console.log(JSON.stringify(a));
    //     console.log("did we make it")
    //     console.log("done")
    // });
        
    // res.status(200).send(response);
    };

    // ffmpegcrush("https://s3.amazonaws.com/appforest_uf/f1588651432936x967833387599405800/audio1842812.wav")