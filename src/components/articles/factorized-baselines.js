import React from 'react';
import "../../styles/articles.css"
import Latex from 'react-latex';

const factorizedBaselines = props => {

  const equation1 = `We adopt the notation of the paper with $$\\hat{Q}(s_t, a_t) = \\sum_{t'=t}^{\\infty} \\gamma^{t'-t}r_{t'}$$
  being the estimated Q-value and $$\\rho_{\\pi}(s) = \\sum_{t=0}^{\\infty}\\gamma^t P(s_t = s)$$
  being the state visitation function. Then we can write the policy gradient $$\\nabla_{\\theta} \\eta(\\pi_{\\theta})$$ as:`;
  const equation2 = `$\\nabla_{\\theta} \\eta(\\pi_{\\theta}) = \\mathbb{E}_{\\rho_{\\pi}, \\pi}\\left[ 
    \\nabla_{\\theta} \\log \\pi_{\\theta}(a_t \\mid s_t) \\hat{Q}(s_t, a_t) \\right]$`;
  const equation3 = `$$\\mathbb{E}_{\\rho_{\\pi}, \\pi}[\\cdot]$$ is just taking with expectation over the trajectory, 
  with the distribution of the trajectory being induced by the policy $$\\pi_{\\theta}$$. 
  Given a state dependent baseline $b(s_t)$, I will go over the proof of unbiasedness from class:`;
  const equation4 = `$\\begin{aligned} E_{\\rho_{\\pi}, \\pi}\\left[ \\nabla_{\\theta} \\log \\pi_{\\theta}(a_t \\mid s_t) \\right]
  &= \\sum_{s} \\rho_{\\pi}(s) \\sum_{a} \\pi_{\\theta}(a_t \\mid s_t) \\nabla_{\\theta} \\log \\pi_{\\theta}(a_t \\mid s_t) b(s_t) \\\\ 
  &= \\sum_{s} \\rho_{\\pi}(s) b(s_t) \\nabla_{\\theta} \\sum_{a} \\pi_{\\theta}(a_t \\mid s_t) \\\\
  &= \\sum_{s} \\rho_{\\pi}(s) b(s_t) \\nabla_{\\theta} [1] \\\\
  &= 0 \\end{aligned}$`;

  const equation5 = `Assuming that each action is composed of $$m$$ conditionally independent factors 
  (e.g. the paper uses some popular MuJoCo tasks where actions are the torque applied on different rotors,
     meaning each rotor's torque is a factor), then we have 
     $$\\pi_{\\theta} (a_t \\mid s_t) = \\prod_{i=1}^{m} \\pi_{\\theta}(a^{i}_{t} \\mid s_t)$$. $$\\pi_{\\theta}(a^{i}_{t} \\mid s_t)$$ 
     is the probability of observing the value $$a^{i}_{t}$$ for the $ith$ factor given $$s_t$$ and is 
     a valid probability distribution. Hence:`;
    
  const equation6 = `$\\begin{aligned}
  \\mathbb{E}_{\\rho_{\\pi}, \\pi}\\left[ \\nabla_{\\theta} \\log \\pi_{\\theta}(a_t \\mid s_t) \\hat{Q}(s_t, a_t) \\right] = 
  \\mathbb{E}_{\\rho_{\\pi}, \\pi}\\left[ \\sum_{i=1}^{m} \\nabla_{\\theta} \\log \\pi_{\\theta}(a^i_t \\mid s_t) \\hat{Q}(s_t, a_t) \\right]
  \\end{aligned}$`;

  const equation7 = `Then for each factor $$i$$ we have a baseline $$b_i(s_t, a_t^{-i}) = b_i$$ where $$a^{-i}_t$$ is 
  the action vector with the $ith$ factor missing. Thus $b_i$ depends on the state $$s_t$$ and all action factors other 
  than the $$ith$$ factor. Then we show $$b_i = b_i(s_t, a_t^{-i})$$ is an unbiased baseline.`;

  const equation8 = `$\\begin{aligned}
  \\mathbb{E}_{a_t}\\left[\\nabla_{\\theta} \\log \\pi_{\\theta}(a^i_t \\mid s_t) b_i(s_t, a_t^{-i}) \\right] &= \\sum_{a_t} \\pi_{\\theta}(a_t, s_t) \\nabla_{\\theta} \\log \\pi_{\\theta}(a^i_t \\mid s_t) b_i(s_t, a_t^{-i}) \\\\
  &= \\sum_{a_t} \\prod_{i'=1}^{m} \\pi_{\\theta}(a^{i'}_t, s_t) \\nabla_{\\theta} \\log \\pi_{\\theta}(a^i_t \\mid s_t) b_i(s_t, a_t^{-i}) \\\\
  &= \\sum_{a_t} \\prod_{i'\\neq i} \\pi_{\\theta}(a^{i'}_t, s_t) \\left[ \\pi_{\theta}(a^i_t, s_t) \\nabla_{\\theta} \\log \\pi_{\\theta}(a^i_t \\mid s_t) b_i(s_t, a_t^{-i}) \\right] \\\\
  &= \\sum_{a_t} \\prod_{i'\\neq i} \\pi_{\\theta}(a^{i'}_t, s_t) \\nabla_{\\theta}  \\left[ \\pi_{\\theta}(a^i_t \\mid s_t) b_i(s_t, a_t^{-i}) \\right] \\\\
  &= \\mathbb{E}_{a^{-i}_t}\\left[ \\nabla_{\\theta} \\mathbb{E}_{a^{i}_t} \\left[ b_i(s_t, a_t^{-i}) \\right] \\right] \\\\
  &= \\mathbb{E}_{a^{-i}_t}\\left[ b_i(s_t, a_t^{-i}) \\nabla_{\\theta}   \\mathbb{E}_{a^{i}_t} \\left[ 1\\right] \\right] \\\\
  &= 0
\\end{aligned}$`;

  const equation9 = `We essentially decompose the expected value over the actions into the $$ith$$ factor and all 
  other factors. Once this is done the final step comes from the fact that taking the gradient of a constant 
  is always 0. We then have:`;

  const equation10 = `$\\begin{aligned}
  \\nabla_{\\theta} \\eta(\\pi_{\\theta}) &= \\mathbb{E}_{\\rho_{\\pi}, \\pi}\\left[ \\nabla_{\\theta} \\log \\pi_{\\theta}(a_t \\mid s_t) (\\hat{Q}(s_t, a_t) - b_i(s_t, a_t^{-i})) \\right] \\\\
  &= \\mathbb{E}_{\\rho_{\\pi}, \\pi}\\left[ \\nabla_{\\theta} \\log \\pi_{\\theta}(a_t \\mid s_t) \\hat{A}(s_t, a_t) \\right]
\\end{aligned}$`;

  const equation11 = `where $$\\hat{A}(s_t, a_t) = \\hat{Q}(s_t, a_t) - b_i(s_t, a_t^{-i})$$ is the advantage estimator.`;


  const equation12 = `The paper then does some more work to show that the state-action dependent baseline will not 
  degenerate into the state dependent baseline, that the state-action baseline outperforms the state baseline, and 
  shows the optimal state-action dependent baseline. However, for implementation purposes, the paper uses some basic 
  heuristics instead of the true optimal baseline. Using the fact that the most common state-dependent baseline used 
  in practice is the approximated value function $$\\hat{V}(s)$$, the paper proposes utilizing the approximated 
  q-function $$\\hat{Q}(s, a)$$.`;

  const equation13 = `Further, since the baseline $$b_i(s_t, a_t^{-i})$$ is independent of the $ith$ factor, the paper proposes`;

  const equation14 = `$\\begin{aligned}
  b_i = \\frac{1}{M} \\sum_{i=0}^{M} \\hat{Q}_{\\pi_{\\theta}}(s_t, (a_t^{-i}, \\alpha_j))
\\end{aligned}$`;

  const equation15 = `as a baseline where $$\\alpha_j \\sim \\pi_{\\theta}(a^i_t \\mid s_t)$$. However, doing $$M$$ passes through 
  the q-function (which is normally a neural network) can be expensive. Therefore the paper proposes`;

  const equation16 = `$\\begin{aligned}
  b_i = \\hat{Q}_{\\pi_{\\theta}}(s_t, (a_t^{-i}, \\bar{a}^i_t))
\\end{aligned}$`;

  const equation17 = `where $$\\bar{a}^i_t = \\mathbb{E}_{\\pi_{\\theta}}[a^i_t]$$ is the average $ith$ factor. 
  The final algorithm is given below:`;

  const equation18 = `The below graph has state-dependent baseline $$\\hat{V}_{\\pi_{\\theta}}(s)$$ in blue,
   average action baseline $$\\hat{Q}_{\\pi_{\\theta}}(s_t, (a_t^{-i}, \\bar{a}^i_t))$$ in green, and Monte-Carlo 
   state-action baseline $$\\frac{1}{M} \\sum_{i=0}^{M} \\hat{Q}_{\\pi_{\\theta}}(s_t, (a_t^{-i}, \\alpha_j))$$ in purple.`;

  const equation19 = `We see that both methods perform about the same with the average action baseline slightly 
  outperforming towards the end. The authors theorize that the Monte-Carlo state-action baseline is "injecting" 
  error into the baseline. So similar to Expected Sarsa, taking the average action likely lowers variance. The authors 
  then present an artificial task to showcase the increasing advantage of factorized action baselines for higher dimension 
  action spaces. The task is a one step MDP with one state $s$, an m-dimensional action space, and a fixed
   m-dimensional vector c. The reward is $$r(s, a) = -\\lvert\\lvert a - c \\rvert\\rvert_2^2$$. Thus the optimal 
   action is to choose $$a = c$$. The below table shows that action-dependent baseline converges faster than 
   the state-dependent baseline for higher dimension action space. This is largely because the state doesn't 
   actually provide any information to the baseline, since $$c$$ is fixed.`;

  const equation20 = `Earlier it was stated that conditional independence was a condition for the above algorithm. 
  However, it's shown in the appendix that the algorithm can be modified to work with factors that are not 
  conditionally independent. We adopt the notation of the paper and construct an acyclic graphical model for 
  the for the factors. Then $$f(i)$$ is the set of indices of the factors that are parents of the $$ith$$ factor, 
  and $$D(i)$$ is the set of indices of factors that are children of the $$ith$$ factor. So we get the following:`;

  const equation21 = `$\\begin{aligned}
  \\pi_{\\theta}(a_t, s_t) &= \\prod_{i=1}^{m}\\pi_{\\theta}(a^{i}_{t} \\mid s_t, a^{f(i)}_t) \\\\
  b_i &= b_i(s_t, a^{[m]\\setminus D(i)}_t)
  \\end{aligned}$`;

  const equation22 = `where $$[m] = {1, 2, \\ldots, m}$$. Essentially, the probability distribution of each factor 
  $$i$$ is conditioned on the $$s$$ and the factors which it doesn't influence (i.e. it's parents). Similarly, the
   baseline for the $$ith$$ factor is calculated using $$s$$ and the factors which it doesn't influence (i.e. all factors
     other than it's children). In the earlier algorithms for calculating $$b_i((s_t, a_t^{-i})$$ we had two different 
     methods for incorporating the $$ith$$ factor: Monte-Carlo estimation and finding the average factor. Now we need 
     to incorporate all factors $$j \\in [m]\\setminus D(i)$$. So we can modify the algorithms as such:`;
  
  const equation23 = `$\\begin{aligned}
  b_i = \\hat{Q}_{\\pi_{\\theta}}(s_t, (a_t^{[m]\\setminus D(i)}, \\bar{a}^{D(i)}_t))
  \\end{aligned}$`;

  const equation24 = `where $$\\bar{a}^{D(i)}_t$$ is a vector of length $|D(i)|$ and each element 
  is an average factor $$\\bar{a}^j_t = \\mathbb{E}_{\\pi_{\\theta}}[a^j_t]$$ for $$j \\in D(i)$$.`;

  return (
  <div class="container-fluid mb-3 mt-5" id="nib">
    <div id="spacer">A</div>

    <h2>Literature Review: Factorized Action Dependent Baselines</h2>
    <p><small>March 13th, 2023</small></p>
    <div class='row mb-3'>
      <img src="/img/factorized-baselines/thumbnail.jpeg" alt="" width='1200' height='500'></img>
    </div>

    <p><small>Screenshot of half-cheetah environment from MuJoCo</small></p>

    <div class="row">
      <p>
        This is the handout I created for my literature review assignment while taking Reinforcement learning
        at National Yang Ming Chiao Tung Univeristy (國立陽明交通大學) in Hsinchu, Taiwan. I give a review of 
        <em> Variance Reduction for Policy Gradient with Action-Dependent Factorized Baselines</em> by Wu et. al.
        A copy can be found <a href="https://arxiv.org/abs/1803.07246">here</a>.
        </p>
    </div>


    <h4 class="mt-2">Introduction</h4>
    <div class="row">
      <p>
      When doing policy gradient methods, a big challenge that we've discussed in class is the high variance
      of the estimators used for the gradients. The simplest and most popular method we've used for
      variance reduction is baselines. However, we've only discussed state-dependent baselines. <em>Variance
      Reduction for Policy Gradient with Action-Dependent Factorized Baselines</em> shows that baselines
      that depend on both states and factorized actions are not only unbiased but also outperform state
      dependent baselines.
      </p>
    </div>

    <div class="row">
      <p>
      The proof of unbiasedness for these new action dependent baselines is similar to the one for statedependent baselines; just with an extra trick or two. Showing that action dependent baselines
outperforms state dependent baselines involves some tedious definition chasing and algebra. The
paper includes the full proofs of optimality, so for the sake of brevity I will be skipping those proofs.
      </p>
    </div>

    <div class="row">
      <p>
      When constructing the action dependent baselines, the paper requires two conditions to be met:
each action has to be able to be decomposed into individual factors, and each of these factors must
be conditionally independent on the state. The second condition is actually shown in the paper's
appendix to not always be required, but it helps with the optimality and unbiasedness proofs. Further,
the baselines are constructed for each individual factor.
      </p>
    </div>

    <div class="row">
      <p>
      Other works have looked into utilizing action-dependent methods for variance reduction (such as
Q-prop), but none of them have looked into factorizing the action space to build baselines. In this
sense, the factorization condition from earlier is what seperates this work from others. It also leads to
a much simpler implementation.
      </p>
    </div>

    <div class="row">
      <p>
      In the end, the paper gives a very clean and easy to implement baseline that can be applied to a large
number of different tasks. However, some of the benchmarks used to showcase the action-dependent
baseline are a little dubious.
      </p>
    </div>

    <div class="row">
      <p>
      An accompanying video can be found <a href="https://drive.google.com/file/d/13N-wjOA7SHBpns1-7ieG4CvEIANUKVgr/view">here</a> (NOTE: throughout the paper and video I switch between
saying action-dependent baseline and state-action dependent baseline, but they are the same thing)

      </p>
    </div>

    <h4 class="mt-2">Preliminaries</h4>

    <div class="row">
      <Latex>{equation1}</Latex>
    </div>

    <div class="row">
        <Latex displayMode={true}>{equation2}</Latex>
    </div>

    <div class="row">
      <Latex>{equation3}</Latex>
    </div>

    <div class="row">
      <Latex displayMode={true}>{equation4}</Latex>
    </div>

    <div class="row">
     <p>The paper assumes an MDP throughout, but mentions that the proofs work the same with a POMDP 
    (Partially Observed Markov Decision Process) if you just replace the states with observations.
     We have not discussed POMDP's in class, but they're the same as normal MDP's except we have an 
     incomplete picture of the environment at each time step (observations instead of states). The paper 
     discusses a problem of a blind robot trying to put a peg into a randomly placed hole. The robot doesn't
      know the exact state since it can't the position of its hand nor the position of the hole. 
      </p>
    </div>

    <h4 class="mt-2">Supporting Lemmas and Theoretical Analysis</h4>

    <div class="row">
        <Latex>{equation5}</Latex>
    </div>

    <div class="row">
        <Latex displayMode={true}>{equation6}</Latex>
    </div>

    <div class="row">
        <Latex>{equation7}</Latex>
    </div>

    <h5 class="mt-2">Theorem: Factorized Action Baseline is Unbiased</h5>

    <div class="row">
        <Latex displayMode={true}>{equation8}</Latex>
    </div>

    <div class="row">
        <Latex>{equation9}</Latex>
    </div>

    <div class="row">
        <Latex displayMode={true}>{equation10}</Latex>
    </div>

    <div class="row">
        <Latex>{equation11}</Latex>
    </div>

    <h4 class="mt-2">Discussion</h4>

    <h5 class="mt-2">Implementation</h5>

    <div class="row">
        <Latex>{equation12}</Latex>
    </div>

    <div class="row">
        <Latex>{equation13}</Latex>
    </div>

    <div class="row">
        <Latex  displayMode={true}>{equation14}</Latex>
    </div>

    <div class="row">
        <Latex >{equation15}</Latex>
    </div>

    <div class="row">
        <Latex displayMode={true}>{equation16}</Latex>
    </div>

    <div class="row">
        <Latex>{equation17}</Latex>
    </div>

    <div class='row mb-3 mt-3'>
      <img src="/img/factorized-baselines/algorithm.PNG" alt="" width='800' height='400'></img>
    </div>

    <h5 class="mt-2">Results</h5>

    <div class="row">
      <p>
      Below are results showing that the state-action baseline (green) converges faster than the state baseline (blue) in several MuJoCo tasks:
      </p>
    </div>

    <div class='row mb-3 mt-3'>
      <img src="/img/factorized-baselines/s_vs_sa.PNG" alt="" width='800' height='500'></img>
    </div>

    <div class="row">
        <Latex>{equation18}</Latex>
    </div>

    <div class='row mb-3 mt-3'>
      <img src="/img/factorized-baselines/sa_methods.PNG" alt="" width='800' height='500'></img>
    </div>

    <div class="row">
      <Latex>{equation19}</Latex>
    </div>

    <div class='row mb-3 mt-3'>
      <img src="/img/factorized-baselines/high_dimension.PNG" alt="" width='800' height='300'></img>
    </div>

    <div class="row">
      <Latex>
      Finally, we have results showcasing the factorized baseline solving a POMDP and multi-agent task. 
      The POMDP task is the blind robot one mentioned earlier. The multi-agent task is a two-agent particle 
      environment where each agent knows the other goal, but not its own. The agents share a communication 
      channel and must reach their goal. We see a comparison where the agents have individual baselines and 
      where they have shared baselines. It's interesting to note that the shared baseline training converges must faster.
      </Latex>
    </div>

    <div class='row mb-3 mt-3'>
      <img src="/img/factorized-baselines/pomdp.PNG" alt="" width='800' height='300'></img>
    </div>

    <div class="row">
      <Latex>
    In regards to the POMDP task, we only see a comparison between the average action baseline and an average action 
    baseline that knows the position of the hole (Note the g for the green line). To me, it seems quite obvious that 
    knowing the position of the hole will improve learning efficiency. I'm also not sure how the average action baseline 
    is uniquely able to take advantage of this information in comparison to other baselines. I'm just confused as to why 
    the authors included this information and why they didn't compare the factorized action baseline to a typical state dependent one.
      </Latex>
    </div>

    <h5 class="mt-2">Conditional Independence Revisited</h5>

    <div class="row">
      <Latex>{equation20}</Latex>
    </div>

    <div class="row">
      <Latex displayMode={true}>{equation21}</Latex>
    </div>

    <div class="row">
      <Latex>{equation22}</Latex>
    </div>

    <div class="row">
      <Latex displayMode={true}>{equation23}</Latex>
    </div>

    <div class="row">
      <Latex>{equation24}</Latex>
    </div>


  </div>
  );
};

export default factorizedBaselines;