<style>
  .anim-underline-fx {
    color: #242424;
    text-decoration: none;
    background-image: linear-gradient(to right, #242424 50%, #e5e7eb 10%);
    background-size: 200% 3px;
    background-repeat: no-repeat;
    background-position: 100% 100%;
    transition: background-position 0.3s;
  }

  .anim-underline-fx:hover {
    background-position: 0% 100%;
  }
  .wave {
    animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
    animation-duration: 2.5s; /* Change to speed up or slow down */
    animation-iteration-count: infinite; /* Never stop waving :) */
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;
  }

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
  body {
    height: 10000px;
    background-attachment: fixed;
  }

  h1 {
    color: #242424;
    display: block;
  }

  .wrapper {
    position: relative;
  }

  .container {
    margin: 0 auto;
    position: relative;

    .text {
      display: flex;

      p {
        margin: 0;
      }

      span {
        color: #242424;
        transition: opacity 0.25s linear;

        &:last-child {
          border-bottom: 2px solid #fff;
        }
      }
    }
  }

  /* burger */

  .line.transform-active:nth-child(1) {
    transform: translateY(2px) rotate(45deg);
  }

  .line.transform-active:nth-child(2) {
    transform: translateY(-8px) rotate(-45deg);
  }

  body {
    cursor: none; /* Hide the default cursor */
    margin: 0;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  button,
  a,
  img {
    margin: 20px;
    display: block;
  }

  .custom-cursor {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #333;
    position: fixed;
    pointer-events: none; /* Make sure the cursor does not interfere with any element */
    transition:
      transform 0.2s ease,
      width 0.2s ease,
      height 0.2s ease,
      background-image 0.2s ease;
    z-index: 1000;
  }

  .custom-cursor.arrow {
    background-image: url("arrow-icon.svg");
    background-size: cover;
  }

  .custom-cursor.lens {
    background-image: url("lens-icon.svg");
    background-size: cover;
  }

  .custom-cursor.large {
    transform: scale(2);
  }
</style>
