import { PythonShell } from "python-shell";

const controller = class textGenerationDAO {

  static apiGenerateLyrics(req, res) {

    let options = {
      args: [req.query.songLength, req.query.artist]
    };
    
    try {
      PythonShell.run('var/app/current/dao/text-generation/cli.py', options, function (err, results) {
        if (err) throw err;
        console.log('results: %j', results);
  
        let response = {
          lyrics: results[0],
        }
  
        res.json(response);
      });
    } catch (error) {
      let response = {
        lyrics: "soundtrack to my life",
      }

      res.json(response);
    }

  }

}

export default controller