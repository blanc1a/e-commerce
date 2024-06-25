<template>
  <section class="products">
    <div class="banner">
      <h2>Rings</h2>
      <p>Feel free to explore our product range.</p>
      <div class="filter-area">
        <span>Filter by price:</span>
        <!--click-event => alternative zu eventListener-->
        <div class="drop-down" @click="toggleDropDown">
          <!--bindet die selectedOption-Daten an das p Element und zeigt die aktuell ausgewählte Option an-->
          <p>{{ selectedOption }}</p>
          <!--v-if bindet die Sichtbarkeit der ul-Liste an die isOpen-Daten-->
          <ul
            id="drop-down-list"
            class="drop-down-list"
            ref="dropDownList"
            v-if="isOpen"
          >
            <!--@click.stop.prevent verhindern das Standardverhalten des Links, stoppen die Ereignisausbreitung und führen die selectOption() aus-->
            <li @click.stop.prevent="selectOption('Low to high')">
              <a href="">Low to high</a>
            </li>
            <li @click.stop.prevent="selectOption('High to low')">
              <a href="">High to low</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="product-container">
      <div class="card">
        <img :src="ringOne" alt="" />
        <div class="product-text">
          <h3>Ring Name</h3>
          <span>50€</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="buttons">
            <button>Add to card</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img :src="ringTwo" alt="" />
        <div class="product-text">
          <h3>Ring Name</h3>
          <span>40€</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="buttons">
            <button>Add to card</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img :src="ringThree" alt="" />
        <div class="product-text">
          <h3>Ring Name</h3>
          <span>60€</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="buttons">
            <button>Add to card</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img :src="ringFour" alt="" />
        <div class="product-text">
          <h3>Ring Name</h3>
          <span>35€</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="buttons">
            <button>Add to card</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img :src="ringFive" alt="" />
        <div class="product-text">
          <h3>Ring Name</h3>
          <span>55€</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="buttons">
            <button>Add to card</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img :src="ringSix" alt="" />
        <div class="product-text">
          <h3>Ring Name</h3>
          <span>20€</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="buttons">
            <button>Add to card</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img :src="ringSeven" alt="" />
        <div class="product-text">
          <h3>Ring Name</h3>
          <span>70€</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="buttons">
            <button>Add to card</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img :src="ringEight" alt="" />
        <div class="product-text">
          <h3>Ring Name</h3>
          <span>50€</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="buttons">
            <button>Add to card</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img :src="ringNine" alt="" />
        <div class="product-text">
          <h3>Ring Name</h3>
          <span>56€</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="buttons">
            <button>Add to card</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img :src="ringTen" alt="" />
        <div class="product-text">
          <h3>Ring Name</h3>
          <span>45€</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="buttons">
            <button>Add to card</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img :src="ringEleven" alt="" />
        <div class="product-text">
          <h3>Ring Name</h3>
          <span>50€</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="buttons">
            <button>Add to card</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img :src="ringTwelve" alt="" />
        <div class="product-text">
          <h3>Ring Name</h3>
          <span>35€</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="buttons">
            <button>Add to card</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img :src="ringThirteen" alt="" />
        <div class="product-text">
          <h3>Ring Name</h3>
          <span>65€</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="buttons">
            <button>Add to card</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img :src="ringFourteen" alt="" />
        <div class="product-text">
          <h3>Ring Name</h3>
          <span>40€</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="buttons">
            <button>Add to card</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img :src="ringFifteen" alt="" />
        <div class="product-text">
          <h3>Ring Name</h3>
          <span>60€</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="buttons">
            <button>Add to card</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img :src="ringSixteen" alt="" />
        <div class="product-text">
          <h3>Ring Name</h3>
          <span>35€</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="buttons">
            <button>Add to card</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ringOne from "@/assets/images/ring-1.jpg";
import ringTwo from "@/assets/images/ring-2.jpg";
import ringThree from "@/assets/images/ring-3.jpg";
import ringFour from "@/assets/images/ring-4.jpg";
import ringFive from "@/assets/images/ring-5.jpg";
import ringSix from "@/assets/images/ring-6.jpg";
import ringSeven from "@/assets/images/ring-7.jpg";
import ringEight from "@/assets/images/ring-8.jpg";
import ringNine from "@/assets/images/ring-9.jpg";
import ringTen from "@/assets/images/ring-10.jpg";
import ringEleven from "@/assets/images/ring-11.jpg";
import ringTwelve from "@/assets/images/ring-12.jpg";
import ringThirteen from "@/assets/images/ring-13.jpg";
import ringFourteen from "@/assets/images/ring-14.jpg";
import ringFifteen from "@/assets/images/ring-15.jpg";
import ringSixteen from "@/assets/images/ring-16.jpg";
import background from "@/assets/images/bg.jpg";
export default {
  name: "landingPage",
  data() {
    return {
      isOpen: false,
      selectedOption: "Default",
      ringOne,
      ringTwo,
      ringThree,
      ringFour,
      ringFive,
      ringSix,
      ringSeven,
      ringEight,
      ringNine,
      ringTen,
      ringEleven,
      ringTwelve,
      ringThirteen,
      ringFourteen,
      ringFifteen,
      ringSixteen,
      background,
    };
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      console.log("Option selected:", option); // Log the selected option
      this.selectedOption = option;
      this.isOpen = false;
    },
  },
};
</script>
<style scoped>
.products {
  padding: 1rem 10%;
}

.banner {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.banner h2 {
  font-family: Charmonman;
  font-size: 50px;
}

.filter-area {
  display: flex;
  gap: 1rem;
}

.drop-down {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.drop-down p {
  font-family: Charmonman;
  width: 12rem;
  margin-left: 1rem;
}
.drop-down-list {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;

  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.drop-down-list li {
  padding: 10px;
  background-color: black;
  color: white;
}

.drop-down-list li a {
  text-decoration: none;
  color: white;
}
.drop-down-list li:hover {
  background-color: #f0f0f0;
}

.drop-down-list li a:hover {
  color: black;
}

.product-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 5rem;
  margin: 0 auto;
}

.card {
  background-color: #5c432e;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  /* 
  border: solid white 1px; */
  border-radius: 6px;
}

.card img {
  max-width: 300px;
  height: 270px;
  border-radius: 6px;
  margin-top: 1rem;
  cursor: pointer;
}

.product-text {
  padding: 1rem 1rem 1rem 1.5rem;
  position: relative;
  margin-top: 1rem;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.buttons {
  display: flex;
  gap: 1rem;
}
.buttons button {
  all: unset;
  background-color: #2e2117;
  margin-top: 1rem;
  text-transform: uppercase;
}

.buttons button:hover {
  text-shadow: #fc0 1px 0 10px;
}

.card:hover {
  transform: scale(1.05); /* Leichte Vergrößerung */
  transition: all 200ms ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
