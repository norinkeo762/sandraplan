import React from 'react';
import './unnecessaryapp_logo1.png';
import './meal1.png';
import './meal2.png';
import './meal3.png';
import './push.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
      <div className="content">
      <header className="App-header">
      <img src={require('./unnecessaryapp_logo1.png')} className="App-logo" alt="logo" style={{'borderRadius':'170px'}}/>
        <p>
          User <b><code>SANDRA</code>-Hybrid training program</b>
          <ul><li>-Lean up</li>
          <li>-Build out Fast Twitch - A/B fiber dense muscles</li>
          <li>-Back definition; Glute Density</li></ul>
          <h4>
        <p>It is important to note that a typical "PPL"(Push-Pull-Leg) split involves being 3-4 days on and 1 day off to adequately recover between cycles. This program will be a hybrid of PPL + conditioning to cut down the time of being at the gym and creating more efficient RPE(rate of perceived exertion) training. We will do 3 days on and 1 day off and then 2 and 1 to account for the second posterior leg day to focus on growing lower body. More volume, more growth!</p></h4>
        </p>
      <h2><code>8 WEEK MEAL PLAN - FOCUS ON HITTING IT 80%</code></h2>
        <img src={require('./meal1.png')} style={{ width: '200px'}} alt="" />
        <p><b>Meal 1</b> is high fiber and high carb to keep your energy levels high for work. In between your meals, you should be consuming fats like half an avocado or 15-20 almonds to prevent a 'crash' in energy levels. Fat creates a 'buffer' that prevents the significant feeling of hunger. It won't make you feel full but it should make you feel okay. Keep a baggy of almonds in your pocket. Easier than walking around with an avocado.</p>
        <img src={require('./meal2.png')} style={{ width: '200px'}} alt="" />
        <p><b>Meal 2</b> is arguably the more important meal of the athlete because it creates ready fuel for pre-training or post training depending on when you consume it. If you are consuming it before a workout, it should be the <b>lighter option</b> for protein (like basa or turkey) If you are not in need of the nutrients then your body won't take it. However after a workout, there are micro/controlled exertion that requires the body to take the 'blocks' to build. If you are consuming it after your workout, you would choose the heavier protein - which would be the salmon option because it's so rich with omegas. It's slower to be digested which makes for a more efficient protein uptake process when consumed with phosphorous vegetables (brocoli, cauliflower, asparagus.) <u>This would also be the meal that you would omit the carbs</u> if you plan on going out for dinner this night. If you do go out for dinner, limit your meal to something that is high and protein and <u>pack the starches to have the next day for THIS meal 2</u>.</p> 
        <p>
          </p>
          <p>If you plan on having dessert,<b> make sure that it is on a day where you are doing high volume or a conditioning day where the surplus of carbs. would be a benefit to your ATP stores.</b> If you're not on a conditioning day and you really want that dessert, you must commit to a conditioning day the very next day no matter what day it is for you to burn off the surplus. You will notice that there are alternative carb options. Sweet potatoes are lower in glycemic index than regular potatoees and provide more nutrition. We are sticking relatively close to 25-30g of carbs to keep enough carbs to fuel activity but it will also create a deficit the more we increase reprange and volume. It gets adjusted weekly depending on what we are feeling. It is normal to feel sluggish, that is just your body adjusting to a deficit. If the deficit is too unbearable, we can slowly add back calories where they can parse well. And you did mention that they do have good options at the cafeteria. If you can help it, choose as closely as your plan as possible. If they have ground turkey, great. Chicken? Even better. About 2 ladel's scoops would be about 4-5 oz of chicken. It's better to over shoot the protein consumption than carbs. When in doubt, load up the phosporous veggies.</p>
        <img src={require('./meal3.png')} style={{ width: '200px'}} alt="" />
        <p><b>Meal 3</b> is also a meal that you may be omitting depending on what is for dinner. If you are in doubt, give me a shout early in the day if you're able to know where you are going for dinner and I can check if you're able to sacrifice meal 3. If the dinner is large enough both meal 2 and 3 may need to be replaced by snacking through out the day with the almonds and protein chia. This would be 2 tbspn of chia seeds in 3/4 cup of plain greek yogurt with 1 scoop of protein.</p>
      <b><p>It's important to note:</p></b>
      <p>that you will need to include creatine in all your preworkout regimen. And glutamine at the end of the day to facilitate healing and recovery. Most supplements on the market are gimmicks and you get the most out of a multi-vitamin and staying regular. For the most part it's best to stay away from stimulants and to stick to creatine and glutamine for any additional recovery aid. Do not worry too much about being exact, the point of a plan is to get close enough to know where you need work and to be mindful and conscious of what you're consuming to make space for our physical goals. If you do not feel like eating, you can make your chia protein as it fulfils your protein intake and also accounts for extra fiber. For snacks, high protein yogurt and a piece of fruit would suffice between meals. Any other questions? Shoot me a message.</p>
<p>-You can use any sauce / spices. Load up on the mutivitamin and B-vitamins-</p>
    <h4>Day 1: Push Day</h4>
    <img src={require('./push.png')} style={{ width: '200px'}} alt="" />
    <h4>Day 2: Pull 1 - Back focused Day</h4>
    <img src={require('./pull.png')} style={{ width: '200px'}} alt="" />
    <h4>Day 3: Lower Body -Quad focused Day</h4>
    <img src={require('./lb1.png')} style={{ width: '200px'}} alt="" />
    <h3><u><code>Day 4: REST DAY</code></u></h3>
    <h4>Day 5: Lower Body -Glute & Hamstring focused Day</h4>
    <img src={require('./lb2.png')} style={{ width: '200px'}} alt="" />
    <h4>Day 6: Supplementary / conditioning maintenence</h4>
    <img src={require('./supp.png')} style={{ width: '200px'}} alt="" />
    <h3><u><code>Day 7: REST DAY</code></u></h3>
          <p>Enjoy your day</p>
        <a
          className="App-link"
          href="http://www.instagram.com/unnecessaryapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          keonecra@hellointernet.ca
        </a>
      </header>
      <main></main>
    </div></div></div>
  );
}

export default App;
