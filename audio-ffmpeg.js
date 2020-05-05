    /**
     * Responds to any HTTP request.
     *
     * @param {!express:Request} req HTTP request context.
     * @param {!express:Response} res HTTP response context.
     */


    const request = require('request');
    const promise = require('promise');
    const fs = require('fs');
    /* Create an empty file where we can save data */
    async function downloadFile(targetURL,targetfilename) {
        let file = fs.createWriteStream(targetfilename);
        /* Using Promises so that we can use the ASYNC AWAIT syntax */        
        await new Promise((resolve, reject) => {
            let stream = request({
                /* Here you should specify the exact link to the file you are trying to download */
                uri: targetURL,
                headers: {
                    'Connection': 'keep-alive',
                    'Upgrade-Insecure-Requests': '1',
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
                }
            })
            .pipe(file)
            .on('finish', () => {
                console.log(`The file is finished downloading.`);
                resolve();
            })
            .on('error', (error) => {
                reject(error);
            })
        })
        .catch(error => {
            console.log(`Something happened: ${error}`);
        });

    }

    async function ffmpegcrush(fileurl) {

        var ffmpeg = require('fluent-ffmpeg');
        var ffmpegS = require('ffmpeg-static');
        const {join} = require('path')
        const shell = require('any-shell-escape')
        const {exec} = require('child_process')
        var ffprobeS = require('ffprobe-static');
        // var command  = ffmpeg();
        const fetch = require('node-fetch');
        const request = require('request');
        const axios = require('axios');
        const fs = require('fs');
        var promise = require('promise');
        console.log(process)

        console.log(ffmpegS.path);

        console.log(process.cwd() + "node_modules\\ffmpeg-static\\ffmpeg")
        console.log (typeof (process.cwd() + "node_modules\\ffmpeg-static\\ffmpeg\\"));
        const makeMp3 = shell([
            'ffmpeg', '-y', '-v', 'error',
            '-i', (process.cwd() + "\\C4_LE_piste001.mp3"),
            '-acodec', 'wav',
            '-format', 'wav',
            join(process.cwd(), "\\test_output.wav")
        ])
        
        exec(makeMp3, (err) => {
            if (err) {
                console.error(err)
                process.exit(1)
            } else {
                console.info('done!')
            }
        })
        console.log("test1")
        await downloadFile(fileurl,"test.wav").then(x => {
            console.log("test")
            const command = ffprobeS(fs.createReadStream('test.wav'));

            var test = ffprobeS(function(err, metadata) {
                console.log(err)
                console.log(metadata)
                    if (err) return err
                    return {"bitrate": metadata,
                            "sample_rate": JSON.stringify(metadata),
                            "length": JSON.stringify(err)};
            });
        });
        
        

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

    ffmpegcrush("https://s3.amazonaws.com/appforest_uf/f1588651432936x967833387599405800/audio1842812.wav")
