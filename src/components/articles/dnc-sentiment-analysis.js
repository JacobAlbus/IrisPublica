import "../../styles/articles.css"

const dncAnalysis = props => {
  return (
  <div class="container-fluid mb-3 mt-5" id="nib">
    <div id="spacer">A</div>

    <h2>Media Bias in the 2020 Democratic Presidential Nominee Race</h2>
    <p><small>October 6th, 2020</small></p>
    <div class='row mb-3'>
      <img src="/img/dnc-sentiment-analysis/candidates.jpg" alt="" width='1200' height='500'></img>
    </div>

    <div class="row">
      <p>In this post, I'm going to look at how the polarity and subjectivity of the language 
        used by the media affected polling during the race for the 2020 Democratic Presidential 
        Nominee. And I know, I'm a bit late as Joe Biden has already received the nomination, 
        but this hasn't stopped many democrats and leftists from attempting to invalidate his 
        nomination on the basis of unfair media bias. I have taken it upon myself to investigate 
        these claims and perform sentiment analysis, looking for polarity and subjectivity in text, 
        on the language the media used when reporting on the four democratic front-runners: Joe Biden, 
        Bernie Sanders, Elizabeth Warren, and Pete Buttigieg.</p>  
    </div>

    <h4 class="mt-2" id="header">Data/Methodology:</h4>
    <div class="row">
      <p>The first step was to gather the headlines and taglines covering each candidate. I decided 
        to gather the 100 top Google News articles for each candidate from each month between April 1, 
        2019 and April 1, 2020 (Note: when I say article I’m referring to both the headline and tagline,
         more on that later). To get the articles, I used the search query: “first_name last_name 
         after:year-month-01 before:year-month-01” (eg. Elizabeth Warren after:2019–4–01 before:2019–5–01). 
         I chose 100 articles because I noticed that there were some months that had slightly less than 100 
         “explicit” articles for each candidate; explicit meaning that the specified candidate was mentioned 
         in the article. Therefore, I used 100 as a benchmark to avoid extraneous data, as in articles 
         where the candidate is not the main subject. I also removed any of these “non-explicit” articles
        that still made their way into the dataset. Furthermore, I used Google News as its algorithm, 
        which is based on clicks and “publisher authority”, should mean that the 100 articles I gathered 
        are the 100 most relevant from that month and therefore the most representative of the media as 
        a whole.</p>  
    </div>

    <div class="row">
      <p>I chose Joe Biden, Bernie Sanders, Elizabeth Warren, and Pete Buttieg because they were each 
        polling in the top four while running high profile campaigns. This omits Michael Bloomberg
         who did very well in the polls but ran a relatively short campaign. I chose April 2019 as the 
         starting point because each of the front-runners had announced their campaigns by then, and I 
         chose April 2020 as the end point because that was when each of the big four, except Biden, had 
         suspended their campaigns.</p>  
    </div>

    <div class="row">
      <p>To actually gather the data, I used the unofficial GoogleNews PIP API, which I had to slightly
         update. To perform sentiment analysis, I used Vader’s and TextBlob’s rules-based algorithms to
         get sentiment polarity and subjectivity respectively. Polarity means how positive or negative
         a text is (ranging from -1 to +1 with +1 being the most positive) and subjectivity means how 
         “strong” or emotional the language is (ranging from 0 to +1 with +1 being the most emotional). 
         This is the link to my github repository.</p>  
    </div>
    
    <h4 class="mt-2" id="header">Note on a Rules-Based Approach:</h4>
    <div class="row">
      <p>It is important to note that a rules-based approach is rather limiting as it cannot accurately give 
        a sentiment score to more complex sentences. This is because they work by averaging all “sentiment” 
        words (words that express positivity or negativity either explicitly or via connotations) in a sentence 
        while looking for sentiment modifiers (negaters like “not” or “but” and comparatives like “very” or 
        “really”). For example, “I love politics” has a positive polarity score, “I really love politics” has a 
        greater positive polarity score, and “I do not love politics” has a negative polarity score. The first 
        and third sentence will have the same subjectivity since they convey the same amount of “emotional 
        strength” and the second sentence will have a greater subjectivity than them since it has more 
        “emotional strength”. However, with more complex sentences that have a more implicit meaning, the 
        algorithm is sometimes unable to correctly assess the sentiment. For example, the title Why you 
        shouldn’t count out Bernie Sanders receives a polarity score of 0 even though any reader would 
        identify it as positive in regards to Sanders. Another example is the headline Why They Hate Sanders, 
        which will receive a negative polarity score even though it is mocking Sanders’ critics and therefore 
        is positive in regard to Sanders.</p>  
    </div>

    <div class="row">
      <p>With a rules based approach, I cannot confidently say that a single article, let alone the entire 
        online media landscape, was positive or negative in regards to a candidate, but rather that the 
        language they used was positive or negative. For this reason, I want to be very clear that this 
        analysis cannot be used to describe “how the media positively or negatively portrayed each candidate” 
        but rather “how positive or negative the LANGUAGE is when the media reports on the candidate”. This 
        is a subtle but important distinction moving forward.</p>  
    </div>
    
    <h4 class="mt-2" id="header">Note on the Dataset:</h4>
    <div class="row">
      <p>It is important to note that the dataset only contains online written articles, so the results of my 
        analysis may not be indicative of the entire media landscape as newspaper articles, TV reports, and 
        other outlets are not being accounted for. Even though this analysis may not be conclusive for every 
        single medium or media outlet, I will refer to the online articles as the media. Furthermore, the 
        dataset does not actually contain the articles but rather just the headlines and tagline. With so much 
        clickbait out there, this may mean that some headlines do not adequately represent the sentiment contained 
        in the article, but the popularity of these articles should ensure that misleading and shoddy headlines 
        are kept to a minimum. Also, some of the headlines and taglines I gathered did not contain the name of 
        the candidate in question, meaning they are “non-explicit”, so I ignored those data points even if they
         allude to a positive or negative sentiment of a candidate (eg. The Rise of the Entitled Millennial 
         Politician in reference to Mayor Pete Buttigieg).</p>  
    </div>

    <div class="row">
      <p>I would have done an analysis of the articles themselves, not just the headline and tagline, but my 
        web scraping skills are amateur at best so I am not entirely sure how to efficiently extract them. 
        I would also have liked to perform entity-level sentiment analysis using a machine learning approach, 
        but I do not see a world where I can get that done within a reasonable time frame.</p>  
    </div>

    <h4 class="mt-2" id="header">Analysis:</h4>
    <div class="row">
      <p>Since not every article I scraped contained the specified candidate in either the headline or tagline, 
        I decided to graph the number of these “non-explicit” articles to get a better understanding of the 
        data set.</p>  
    </div>
    
    <div class="row">
      <p id="caption">Figure 1: Explicit Articles From Each Month.</p>  
    </div>
    <div class='row mb-3'>
      <img src="/img/dnc-sentiment-analysis/fig_1.jpg" alt="" width='1200' height='500'></img>
    </div>

    <div class="row">
      <p>Nothing really too interesting or surprising here. They each have single digit counts of non-explicit 
        articles except Buttigieg who still only has ten [Fig 1]. It makes sense that Buttieg has the most, 
        mainly from an April 2020 spike, since he did not have a high-profile federal job to go back to when 
        his campaign ended. Regardless, I removed non-explicit articles when calculating sentiment, so I think
        we can move on.</p>  
    </div>

    <div class="row">
      <p>After performing sentiment analysis with TextBlob and Vader we are left with these noisy graphs.</p>  
    </div>

    <div class="row">
      <p id="caption">Figure 2: Polarity Over Time</p>  
    </div>
    <div class='row mb-3'>
      <img src="/img/dnc-sentiment-analysis/fig_2.jpg" alt="" width='1200' height='500'></img>
    </div>

    <div class="row">
      <p id="caption">Figure 3: Subjectivity Over Time</p>  
    </div>
    <div class='row mb-3'>
      <img src="/img/dnc-sentiment-analysis/fig_3.jpg" alt="" width='1200' height='500'></img>
    </div>

    <div class="row">
      <p>Neither graphs really tell us much as the data seems to be all over the place [Fig 2 & 3]. 
        The one item of note is Biden’s average polarity score during the Spring and Summer of 2019, 
        where the media consistently used negative language when reporting on him [Fig 2]. We’ll keep that 
        in mind as we look further into the data.</p>  
    </div>

    <div class="row">
      <p>The subjectivity for each candidate was relatively stable, with the standard deviation for each
         candidate being between 0.021~0.027 and their means hovering between 0.245~0.275 [Fig 3 & 4].
          However, the polarity scores were all over the place with Biden averaging 0.0120 and a standard 
          deviation of 0.0662, Sanders averaging 0.0597 and a standard deviation of 0.0394, Warren averaging 
          0.0668 with a standard deviation of 0.0345, and Buttigieg averaging 0.0823 with a standard deviation 
          of 0.0308 [Fig 2 & 4]. The averages are summarized in the graph below:</p>  
    </div>

    <div class="row">
      <p id="caption">Figure 4: Cumulative Sentiment</p>  
    </div>
    <div class='row mb-3'>
      <img src="/img/dnc-sentiment-analysis/fig_4.jpg" alt="" width='1200' height='500'></img>
    </div>
    
    <div class="row">
      <p>The large variance in polarity for each candidate is likely due to the rules-based approach 
        to sentiment analysis which cannot accurately give a sentiment score to more complex sentences 
        [Fig 2]. Comparing the standard deviations for polarity, we can see a clear distinction between 
        the more-well known candidates, Biden and Sanders, and the lesser knowns, Warren and Buttigieg [Fig 2]. 
        With Biden and Sanders being so high-profile and having long political careers, it makes sense for 
        them to come under more attack and receive more praise than the two lesser knowns, which is reflected 
        in their greater standard deviations. It is also odd to note that both Biden and Sanders saw their 
        average polarity scores generally increase as their campaigns continued [Fig 2]. Maybe it could be 
        that there was less dirt to be thrown at each candidate as the campaigns progressed and media companies 
        ran out? Or could it be that more liberal outlets started to cool down on hit pieces as they realized 
        Trump was a larger threat? Whatever, the case may be, it’s odd to say the least.</p>  
    </div>

    <div class="row">
      <p>Looking back to the cumulative sentiment chart, I was most shocked to see Biden all on his lonesome 
        with a nearly neutral polarity score while Buttigieg pulled out on top, leaving Warren and Sanders to 
        fight for second and third place respectively [Fig 4]. Plotting the histograms of cumulative* subjectivity 
        frequency for each candidate reveals that Biden’s low polarity score might be because the media 
        just didn’t use strong language when talking about him.</p>  
    </div>

    <div class="row">
      <p id="caption">*cumulative meaning that it covers all the articles over the entire window between April 
      2019 and April 2020.</p>  
    </div>

    <div class="row">
      <p id="caption">Figure 5: Cumulative Subjectivity Frequency</p>  
    </div>
    <div class='row mb-3'>
      <img src="/img/dnc-sentiment-analysis/fig_5.jpg" alt="" width='1200' height='500'></img>
    </div>

    <div class="row">
      <p>Notice how his graph lacks the significant bump in articles around the 0.3 subjectivity score [Fig 5]. 
        Instead his distribution looks much more uniform in the 0.0~0.3 range before dropping off, signifying 
        that people are less likely to use strong language when talking about him [Fig 5]. Furthermore, while 
        most candidates’ cumulative polarity frequency graphs are left-skewed, meaning they have less data 
        left of the mean, Biden’s is more symmetric meaning that he has more articles where the language is 
        negative [Fig 6].</p>  
    </div>

    <div class="row">
      <p id="caption">Figure 6: Cumulative Polarity Frequency</p>  
    </div>
    <div class='row mb-3'>
      <img src="/img/dnc-sentiment-analysis/fig_6.jpg" alt="" width='1200' height='500'></img>
    </div>

    <div class="row">
      <p>These graphs also show how a plurality of the articles for each candidate had a polarity score of 
        around zero. This is likely a result of Vader not being able to fully detect sentiments from implication 
        and connotation, but it could also mean that the majority of the language used in articles is neutral.</p>  
    </div>

    <div class="row">
      <p id="caption">Figure 7: Other Candidates in Article</p>  
    </div>
    <div class='row mb-3'>
      <img src="/img/dnc-sentiment-analysis/fig_7.jpg" alt="" width='1200' height='500'></img>
    </div>

    <div class="row">
      <p>Here we see bar graphs for the number of articles from each month where candidates other than the one 
        specified were mentioned. For example, in April 2019, there are seven articles where one of the other 
        big four candidates are talked about when Joe Biden is looked up. The y-axis scales are a bit inconsistent 
        here, but if we add up the count for each candidate, then we get that Biden had 76 articles, Sanders had 
        156, Warren had 120, and Buttigieg had 126. From here, we can see how the sentiment of the language used 
        on one candidate would “rub off” on another. For example, since Sanders has 156 articles where the others
         were mentioned, then his sentiment score is the most affected by the language used when talking about 
         the other candidates.</p>  
    </div>

    <h4 class="mt-2" id="header">Conclusion:</h4>
    <div class="row">
      <p>It seems that while the other candidates were able to inspire passionate fan bases, with equally 
        passionate writers and journalists, Biden was unable to, resulting in low subjectivity and polarity 
        scores. However, we know that Biden is now the nominee, so what happened? How can the candidate most 
        associated with negative language come out on top? Well, a pretty easy answer is that my analysis is 
        flawed as it didn’t even look how each article talked specifically about the candidate. This could mean 
        that the Biden dataset was filled with articles that used negative language to attack the other 
        candidates, but I find this unlikely as Biden had the least amount of articles where other candidates 
        were mentioned and an article like <span id="caption">Biden Good Bernie Bad</span> should result in a 
        neutral polarity score.</p>  
    </div>

    <div class="row">
      <p>Perhaps the answer may be that people simply want a moderate who promises a return to normalcy. A more 
        sinister answer would be mass voter suppression or some shadowy elitist group controlling our democracy 
        like a puppet. However, those possibilities are neither here nor there and are beyond the scope of this 
        article. Whatever the answer to Biden’s seemingly unlikely victory may be, it is likely not due to media 
        bias.</p>  
    </div>
  </div>
  );
};

export default dncAnalysis;