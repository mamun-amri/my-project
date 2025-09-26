import Aos from "aos";
import CardSkill from "./ui/CardSkill";
import LinkIcon from "./ui/LinkIcon";
import hero from "./assets/hero.png";

function App() {
  Aos.init();

  return (
    <>
      {/* hero section start */}
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Hello All, I'm{" "}
                <span className="block text-dark font-bold text-4xl lg:text-5xl ">
                  Ma'mun Amri
                </span>
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 ">
                FrontEnd Developer &{" "}
                <span className="text-dark">Web Programmer</span>
              </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">
                Stay Curious & Never Stop Learning!
              </p>
              <a
                href="#"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300"
              >
                Contact Me
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <img
                  src={hero}
                  alt="Mamun Amri"
                  className="mx-auto max-w-full"
                />
                <span className="absolute -bottom-5 -z-10 left-1/2 -translate-x-1/2 md:scale-100">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    width={400}
                    height={400}
                    className="mx-auto"
                  >
                    <path
                      fill="#00BBA7"
                      d="M37.5,-43.3C53.1,-31.7,73.2,-24.1,80.5,-10.1C87.8,3.8,82.4,24.1,71.7,40.2C61,56.3,45.1,68.2,27.3,74.3C9.6,80.4,-9.9,80.6,-28.2,75C-46.5,69.4,-63.6,58,-71.7,42.3C-79.9,26.5,-79,6.4,-76.2,-14.1C-73.4,-34.6,-68.6,-55.3,-55.6,-67.4C-42.6,-79.5,-21.3,-82.8,-5.1,-76.7C11,-70.6,22,-54.9,37.5,-43.3Z"
                      transform="translate(100 100) scale(1.1)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}

      {/* about section start */}
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-5 lg:w-1/2">
              <h4 className="text-lg font-bold mb-3 text-primary uppercase">
                About Me
              </h4>
              <h2 className="text-3xl font-bold mb-4 text-dark max-w-xl">
                FrontEnd
              </h2>
              <p className="font-medium text-secondary pb-4 leading-relaxed">
                I am a passionate FrontEnd Developer and Web Programmer with a
                knack for creating engaging and user-friendly web experiences.
                using HTML, CSS, JavaScript, and modern frameworks like
                React,NextJs integrated with Tailwind CSS to build responsive
                and dynamic websites.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2" data-aos="fade-up">
              <div className="mt-10 lg:mt-9 lg:right-0">
                <h2 className="font-semibold text-2xl mb-3 max-w-xl lg:text-3xl">
                  let's be friends
                </h2>
                <p className="text-base text-secondary font-medium leading-relaxed mb-5 flex items-center">
                  for business contact me on
                  <a
                    className="justify-center items-center flex rounded-md bg-white text-secondary hover:bg-primary hover:border-primary hover:text-white mx-2"
                    href="https://www.linkedin.com/in/mamun-amri-72334a196/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="fill-current"
                      width={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                    </svg>
                  </a>
                  or{" "}
                  <a
                    className="justify-center items-center flex rounded-md bg-white text-secondary hover:bg-primary hover:border-primary hover:text-white mx-2"
                    href="mailto:mamunamri97@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="fill-current"
                      width={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                    </svg>
                  </a>
                </p>
                <div className="flex items-center">
                  <LinkIcon
                    link={"https://www.youtube.com/@mamunamri"}
                    className=""
                  >
                    <svg
                      className="fill-current"
                      width={20}
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>YouTube</title>
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </LinkIcon>
                  <LinkIcon
                    link={"https://www.instagram.com/mamunamri"}
                    className=""
                  >
                    <svg
                      className="fill-current"
                      width={20}
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Instagram</title>
                      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                    </svg>
                  </LinkIcon>
                  <LinkIcon link={"https://github.com/mamun-amri"} className="">
                    <svg
                      className="fill-current"
                      width={20}
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </LinkIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about section end */}

      {/* skill section start */}
      <section id="skill" className="pt-36 pb-32 bg-slate-50">
        <div className="container px-4">
          <div className="flex items-center justify-center self-start">
            <h4 className="text-lg font-bold mb-5 text-primary uppercase self-start">
              Skills
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 ">
            <CardSkill title={"Bootstrap"}>
              <svg
                className="fill-current group-hover:animate-spin"
                width={20}
                height={20}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Bootstrap</title>
                <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" />
              </svg>
            </CardSkill>
            <CardSkill title={"Tailwind CSS"}>
              <svg
                className="fill-current group-hover:animate-spin"
                width={20}
                height={20}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Tailwind CSS</title>
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
              </svg>
            </CardSkill>
            <CardSkill title={"React"}>
              <svg
                className="fill-current group-hover:animate-spin"
                width={20}
                height={20}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>React</title>
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
            </CardSkill>
            <CardSkill title={"Next.js"}>
              <svg
                className="fill-current group-hover:animate-spin"
                width={20}
                height={20}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Next.js</title>
                <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
              </svg>
            </CardSkill>
            <CardSkill title={"GitLab"}>
              <svg
                className="fill-current group-hover:animate-spin"
                width={20}
                height={20}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitLab</title>
                <path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" />
              </svg>
            </CardSkill>
            <CardSkill title={"Vite"}>
              <svg
                className="fill-current group-hover:animate-spin"
                width={20}
                height={20}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Vite</title>
                <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" />
              </svg>
            </CardSkill>
            <CardSkill title={"Inkscape"}>
              <svg
                className="fill-current group-hover:animate-spin"
                width={20}
                height={20}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Inkscape</title>
                <path d="M7.666 14.871c.237.147 3.818.875 4.693 1.02.303.064.088.376-.33.587-.943.251-5.517-1.607-4.363-1.607zm5.647-13.264l3.505 3.56c.333.34.328.998.142 1.187l-1.74-1.392-.342 2.061-1.455-.767-2.328 1.47-.771-3.1L9.073 6.79H7.16c-.78 0-.871-.99-.163-1.698 1.237-1.335 2.657-2.696 3.429-3.485.776-.793 2.127-.77 2.887 0zM9.786.97l-8.86 9.066c-2.993 3.707 2.038 3.276 4.194 4.343.774.791-2.965 1.375-2.191 2.166.773.791 4.678 1.524 5.453 2.314.773.791-1.584 1.63-.81 2.42.773.792 2.563.042 2.898 1.868.238 1.304 3.224.56 4.684-.508.774-.791-1.48-.717-.706-1.508 1.923-1.967 3.715-.714 4.373-2.686.325-.974-2.832-1.501-2.057-2.292 2.226-1.3 9.919-2.146 6.268-5.796L13.85.97c-1.123-1.078-2.998-1.09-4.063 0zm10.177 17.475c0 .45 3.314.745 3.314-.106-.472-1.366-2.922-1.274-3.314.106zm-14.928 2.39c.784.679 1.997-.169 2.36-1.116-.76-1.01-3.607.037-2.36 1.116zm14.512-1.466c-1.011.908.114 1.828 1.111 1.242.222-.225-.006-1.016-1.11-1.242Z" />
              </svg>
            </CardSkill>
            <CardSkill title={"Asterisk"}>
              <svg
                className="fill-current group-hover:animate-spin"
                width={20}
                height={20}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Asterisk</title>
                <path d="M14.92474 1.7776c-1.5868-.006-2.72634.1583-4.0059.57625-.4307.1407-1.11947.41114-1.53049.60105s-1.17324.62818-1.69469.97591-1.31453.95274-1.76285 1.3415c-.4483.38876-1.13243 1.07288-1.52119 1.5212-.38875.44831-.93594 1.1598-1.21447 1.58005s-.52234.7479-.54218.72806c-.0821-.0821.68021-1.55226 1.21138-2.336l.57006-.8427-.61344.59485c-.33697.32716-.9366 1.0258-1.3353 1.55217s-.92949 1.32942-1.17729 1.78453c-.2478.45513-.59826 1.25105-.77764 1.76906l-.3253.94182v.18686c-.14567.47425-.20618.82312-.20545 1.37674.003.60684.0609 1.08074.20544 1.61182v.19538l.26954.79313c.14744.4362.43545 1.08232.64132 1.43444.20587.35211.6835.96441 1.05957 1.36318.37607.39876.97836.9227 1.3384 1.1618 1.07417.71335 2.16188 1.14074 3.5288 1.38487.43621.0779 1.3454.14382 2.01998.14871.6746.005 1.6949-.0605 2.26785-.1456s1.5643-.30574 2.20278-.48952c.6385-.18377 1.62088-.5359 2.1842-.78383l1.02548-.44923.65062.19518c.73972.2239 4.10778.98772 4.15461.94184.0169-.0165-.36632-.8263-.85199-1.80002l-.88297-1.77214.78383-.94184c.43255-.518 1.03592-1.3173 1.3384-1.77524.3025-.45795.76326-1.2833 1.0255-1.8341.26222-.5508.56867-1.3353.68158-1.74426.11292-.40896.25185-1.1359.30672-1.61724.0689-.60404.0673-1.14149-.006-1.73496-.0586-.4729-.21192-1.16555-.34079-1.53668s-.42997-1.01806-.6661-1.43754c-.54074-.96059-1.69132-2.13154-2.525-2.57147-.33479-.17667-.63723-.3222-.67539-.3222-.0382 0 .15568.17987.43374.39966.55794.44102 1.24622 1.27072 1.58625 1.91155l.22307.41516-.22307-.29743c-.12202-.16358-.55922-.63692-.97282-1.05027-.57349-.57315-.95288-.85022-1.59555-1.168-.548-.27098-1.18938-.48753-1.8341-.62273-.73249-.1536-1.36683-.20995-2.42895-.21377zm-.0496 1.09674c1.0863.002 1.5545.0494 2.15941.21068.4251.11334 1.07198.3469 1.43754.5205.47067.22351.88578.5356 1.41895 1.06885.57816.57824.84717.94844 1.16491 1.59555.22757.46348.4809 1.155.56076 1.53668.0799.3817.14467 1.03524.14562 1.45303.003 1.31394-.3635 2.79464-1.04098 4.198-.18427.38169-.52577.98397-.75905 1.3384s-.77228 1.0048-1.19588 1.44684c-.4236.44202-.76835.83226-.76835.86438 0 .0321.35691.60325.79313 1.27024s.79313 1.2502.79313 1.29503c0 .0448-.0232.0805-.0527.0805s-.69262-.24538-1.47162-.54527-1.53096-.54528-1.6699-.54528c-.13895 0-.49078.10608-.78384.23546-.96736.42709-2.77125.95962-3.74256 1.10604-.52582.0793-1.31114.13955-1.74736.13322-1.57475-.0228-2.75872-.2955-4.11434-.94803-.79414-.38227-1.07524-.58708-1.79383-1.30742-.64984-.65144-.93938-1.03166-1.21447-1.59865-.19842-.40895-.42859-1.01031-.5112-1.3353-.21292-.83764-.19273-2.23255.0465-3.1849.10833-.4313.4223-1.23948.69708-1.79693.2748-.55745.76385-1.36438 1.08745-1.79383s.9908-1.16322 1.48092-1.62963c.95198-.90593 2.10627-1.72182 3.23136-2.28333.97376-.48599 2.268-.92608 3.45134-1.1742.75897-.15914 1.35506-.21232 2.39797-.21068zM10.7033 5.2787l.0409 1.89897c.0351 1.63358.0207 1.89128-.1036 1.8436-.0794-.0305-.80422-.48575-1.61046-1.01155s-1.47836-.94257-1.49369-.92635c-.0823.0871-1.33617 2.22031-1.33627 2.27346-.00008.0346.73564.48078 1.63505.99141s1.63543.95078 1.63543.97805c0 .0273-.73602.46741-1.63543.97805s-1.63513.95676-1.63505.9914c.0001.0536 1.25446 2.18701 1.33724 2.27443.0159.0168.75297-.4196 1.63795-.9699l1.6091-1.0007-.0407 1.88715-.0405 1.88716h2.76277l-.0711-1.89394c-.0585-1.55786-.048-1.8797.0598-1.81397.0721.0439.73181.4535 1.46601.91028s1.41202.87183 1.50628.92228c.14504.0776.27851-.087.86864-1.07099.49096-.81865.66132-1.18318.57568-1.2321-.0669-.0382-.82975-.46984-1.69527-.95907l-1.57367-.88956.23527-.14813c.1294-.0815.88216-.51577 1.67281-.96526s1.44714-.82465 1.45884-.8336c.0117-.009-.2923-.53914-.67559-1.17826-.45485-.75844-.73775-1.13783-.81443-1.0923-.0646.0384-.49675.31373-.96023.6119-.46348.29815-1.1465.73747-1.5179.9763l-.6754.43412.0705-1.93634.0703-1.93654H12.085zM2.5788 9.24433c.00078-.00004.002 0 .003 0 .0273 0 .0496.0223.0496.0496s-.0223.0496-.0496.0496a.0497.0497 0 0 1-.0496-.0496c0-.0264.021-.0482.047-.0496z" />
              </svg>
            </CardSkill>
            <CardSkill title={"Socket.io"}>
              <svg
                className="fill-current group-hover:animate-spin"
                width={20}
                height={20}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Socket.io</title>
                <path d="M11.9362.0137a12.1694 12.1694 0 00-2.9748.378C4.2816 1.5547.5678 5.7944.0918 10.6012c-.59 4.5488 1.7079 9.2856 5.6437 11.6345 3.8608 2.4179 9.0926 2.3199 12.8734-.223 3.3969-2.206 5.5118-6.2277 5.3858-10.2845-.058-4.0159-2.31-7.9167-5.7588-9.9796C16.354.5876 14.1431.0047 11.9362.0137zm-.063 1.696c4.9448-.007 9.7886 3.8137 10.2815 8.9245.945 5.6597-3.7528 11.4125-9.4875 11.5795-5.4538.544-10.7245-4.0798-10.8795-9.5566-.407-4.4338 2.5159-8.8346 6.6977-10.2995a9.1126 9.1126 0 013.3878-.647zm5.0908 3.2248c-2.6869 2.0849-5.2598 4.3078-7.8886 6.4567 1.2029.017 2.4118.016 3.6208.01 1.41-2.165 2.8589-4.3008 4.2678-6.4667zm-5.6647 7.6536c-1.41 2.166-2.86 4.3088-4.2699 6.4737 2.693-2.0799 5.2548-4.3198 7.9017-6.4557a255.4132 255.4132 0 00-3.6318-.018z" />
              </svg>
            </CardSkill>
            <CardSkill title={"Redux"}>
              <svg
                className="fill-current group-hover:animate-spin"
                width={20}
                height={20}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Redux</title>
                <path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z" />
              </svg>
            </CardSkill>
          </div>
        </div>
      </section>
      {/* skill section end */}

      {/* services section start */}
      {/* <section id="services" className="pt-36 pb-32"></section> */}
      {/* services section end */}

      {/* project section start */}
      <section id="project" className="pt-36 pb-32 ">
        <div className="container px-4">
          <div className="flex">
            <div
              className="w-full px-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h4 className="text-lg font-bold mb-3 text-primary uppercase">
                Project
              </h4>
              <h2 className="text-base mb-4 text-dark ">
                This is all projects that i’ve been working on my entire career
                as a <span className="font-semibold">FrontEnd Engineer</span>.
                To note, In this list, i only include{" "}
                <span className="font-semibold">
                  Office Projects with Private Repository & Full Development
                  Team ⛔ NOT personal freelance projects
                </span>{" "}
                to be more focused & relevant.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 my-5 gap-3">
            {/* command center */}
            <div
              className="w-full px-4 mb-8 bg-slate-100 rounded-l-lg hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out border-l-5 border-primary"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="pl-4 px-2 py-4">
                <h1 className="font-semibold">
                  #Command Center - PT Nutech Integrasi
                </h1>
                <div className="mx-3 space-y-2">
                  <p className="font-semibold text-secondary">
                    📰 Description :{" "}
                  </p>
                  <p className="text-base text-secondary">
                    The{" "}
                    <span className="font-semibold text-primary text-base">
                      Command Center
                    </span>
                    , is monitoring Self-Service Customers for tell them when
                    need help for operation self-service.
                  </p>
                  <div className="self-end">
                    <p className="font-semibold text-secondary ">🔥 Stack :</p>
                    <p className="text-base text-secondary">
                      REST API, Tailwind CSS, Next.JS, Redux, Voip Call,
                      WebSocket, Asterisk, Screen Monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ferizy */}
            <div
              className="w-full px-4 mb-8 bg-slate-100 rounded-l-lg hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out border-l-5 border-primary "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className=" pl-4 px-2 py-4">
                <h1 className="font-semibold">
                  #Web Reservation - PT Nutech Integrasi
                </h1>
                <div className="mx-3 space-y-2">
                  <p className="font-semibold text-secondary">
                    📰 Description :{" "}
                  </p>
                  <p className="text-base text-secondary">
                    The{" "}
                    <a
                      className="font-semibold text-primary text-base"
                      href="https://ferizy.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ferizy.com
                    </a>
                    , is an online ferry ticket reservation system that provides
                    easy access for customers to book ferry tickets online. This
                    system is developed to improve the quality of services
                    provided by PT ASDP Indonesia Ferry (Persero) to its
                    customers, making it easier for them to plan their trips and
                    purchase tickets without having to visit a physical ticket
                    counter.
                  </p>
                  <p className="font-semibold text-secondary">🔥 Stack :</p>
                  <p className="text-base text-secondary">
                    REST API, Bootstrap, Codeigniter, jQuery, Firebase,
                    Maintanance and Update Features
                  </p>
                </div>
              </div>
            </div>
            {/* ifcs */}
            <div
              className="w-full px-4 mb-8 bg-slate-100 rounded-l-lg hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out border-l-5 border-primary"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className=" pl-4 px-2 py-4">
                <h1 className="font-semibold">
                  #Indonesia Ferry Corporate System (IFCS) - PT Nutech Integrasi
                </h1>
                <div className="mx-3 space-y-2">
                  <p className="font-semibold text-secondary">
                    📰 Description :{" "}
                  </p>
                  <p className="text-base text-secondary">
                    The{" "}
                    <a
                      className="font-semibold text-primary text-base"
                      href="https://www.ferizy.com/ifcs/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IFCS
                    </a>
                    , is an internet-based website owned by PT. ASDP Indonesia
                    Ferry (Persero) specifically for corporate customers.
                    Through this website, you can make online purchases and
                    receive various benefits, such as attractive discounts,
                    guaranteed departures, and regular purchase reports.
                  </p>
                  <p className="font-semibold text-secondary">🔥 Stack :</p>
                  <p className="text-base text-secondary">
                    REST API, Bootstrap, Codeigniter, jQuery, Maintanance and
                    Update Features
                  </p>
                </div>
              </div>
            </div>
            {/* skpt */}
            <div
              className="w-full px-4 mb-8 bg-slate-100 rounded-l-lg hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out border-l-5 border-primary"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className=" pl-4 px-2 py-4">
                <h1 className="font-semibold">
                  #Surat Keterangan Penyebrangan Terbatas (SKPT) - PT Nutech
                  Integrasi
                </h1>
                <div className="mx-3 space-y-2">
                  <p className="font-semibold text-secondary">
                    📰 Description :{" "}
                  </p>
                  <p className="text-base text-secondary">
                    The{" "}
                    <span className="font-semibold text-primary text-base">
                      SKPT
                    </span>
                    , SKPT is an internet-based website owned by PT. ASDP
                    Indonesia Ferry (Persero) specifically for customers
                    registered as SKPT members and must have registered parent
                    data.
                  </p>
                  <p className="font-semibold text-secondary">🔥 Stack :</p>
                  <p className="text-base text-secondary">
                    REST API, Bootstrap, Codeigniter, jQuery
                  </p>
                </div>
              </div>
            </div>
            {/* qa system */}
            <div
              className="w-full px-4 mb-8 bg-slate-100 rounded-l-lg hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out border-l-5 border-primary"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className=" pl-4 px-2 py-4">
                <h1 className="font-semibold">#QA System - CV.OnexpSolution</h1>
                <div className="mx-3 space-y-2">
                  <p className="font-semibold text-secondary">
                    📰 Description :{" "}
                  </p>
                  <p className="text-base text-secondary">
                    My First Project The{" "}
                    <span className="font-semibold text-primary text-base">
                      QA System
                    </span>
                    , application to check whether a magnet is suitable for
                    sending to a client or needs to be re-measured, and provide
                    the results of the check to the client in the form of a
                    certificate.
                  </p>
                  <p className="font-semibold text-secondary">🔥 Stack :</p>
                  <p className="text-base text-secondary">
                    PostgreSQL, Bootstrap, PHP, jQuery, Query SQL etc..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project section end */}

      {/* contact section start */}
      {/* <section id="contact" className="pt-36 pb-32 bg-slate-50"></section> */}
      {/* contact section end */}

      {/* footer section start */}
      <section id="footer" className="pt-36 pb-32 bg-slate-50">
        <div className="container px-4">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2" data-aos="fade-up">
              <h4 className="text-lg font-bold mb-3 text-primary uppercase">
                Let's Connect
              </h4>
              <h2 className="text-base mb-4 text-dark ">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out
                to me through any of the platforms below.
              </h2>
              <div className="flex space-x-4 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/mamun-amri-72334a196/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.047c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.368 4.268 5.455v6.288zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.926-2.063 2.063-2.063 1.14 0 2.065.925 2.065 2.063 0 1.139-.925 2.065-2.065 2.065zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
            <div
              className="w-full px-4 py-10 md:py-0 lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <h4 className="text-lg font-bold mb-3 text-primary uppercase">
                Navigate
              </h4>

              <div className="flex">
                <ul className="space-y-4">
                  <li className="text-base text-dark hover:text-primary">
                    <a href="#home">Home</a>
                  </li>
                  <li className="text-base text-dark hover:text-primary">
                    <a href="#about">About</a>
                  </li>
                  <li className="text-base text-dark hover:text-primary">
                    <a href="#skill">Skills</a>
                  </li>
                  <li className="text-base text-dark hover:text-primary">
                    <a href="#project">Project</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-6 bg-slate-100 border-t border-slate-200">
        <div className="container px-4">
          <p className="text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} by{" "}
            <a
              href="https://www.linkedin.com/in/mamun-amri-72334a196/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold"
            >
              Ma'mun Amri
            </a>
            . All rights reserved.
          </p>
        </div>
      </footer>
      {/* footer section end */}
    </>
  );
}

export default App;
