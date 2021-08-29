import http from "../http-text-generation";

class TextGenerationDataServices {
  getLyrics(length=50, artist="Kanye West") {
    return http.get(`/?artist=${artist}&songLength=${length}`);
  }
}

export default new TextGenerationDataServices();