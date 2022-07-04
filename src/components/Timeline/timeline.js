
import React, { useEffect, useState, useRef } from "react";
const events = [
  {
    date: {
      from: 1895,
      to: 1905
    },
    role: "Early Discoveries",
    company: "Theory of radioactive decay",
    location: "Ernest Rutherford",
    content:
      "Proin nunc nulla, blandit sit amet egestas sed, tincidunt non est. Ut id sem justo. Curabitur quis dictum turpis, ut tempus ligula. Fusce tempus scelerisque lorem in posuere."
  },
  {
    date: {
      from: 1996,
      to: 1999
    },
    role: "Futher Investigations",
    company: "First model of an atom",
    location: "Niels Bohr",
    content:
      "Quisque tortor tortor, pretium sed risus sit amet, pretium rutrum nunc. Nulla turpis eros, rhoncus at lobortis eget, elementum eu lectus."
  },
  {
    date: {
      from: 1997,
      to: 1999
    },
    role: "Prelude to War",
    company: "Splitting of the nucleus",
    location: "Albert Einstein",
    content:
      "Cras ut orci hendrerit, elementum massa vitae, eleifend sapien. Praesent dignissim sem est, id ornare sem lobortis at."
  },
  {
    date: {
      from: 1999,
      to: 2001
    },
    role: "Organizing the Effort",
    company: "Nuclear Chain Reaction",
    location: "Enrico Fermi",
    content:
      "Rhoncus at lobortis eget, elementum eu lectus. Maecenas et ante sapien. Ut semper commodo felis, eget ullamcorper dolor faucibus vel. Fusce pharetra tempor est malesuada rutrum."
  },
  {
    date: {
      from: 2002,
      to: 2005
    },
    role: "The Manhattan Project",
    company: "Jornada del Muerto",
    location: "J. Robert Oppenheimer",
    content:
      "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce velit enim, dignissim eu fringilla quis, malesuada et massa."
  },
  {
    date: {
      from: 2005,
      to: 2010
    },
    role: "Crossroads of Peace",
    company: "Atomic Energy Act",
    location: "Harry S. Truman",
    content:
      "Fusce et sem accumsan magna fringilla porta. Nunc eget turpis ut ligula vulputate faucibus. Nam euismod leo vel eleifend suscipit. Pellentesque et congue felis."
  },
  {
    date: {
      from: 2010,
      to: 2014
    },
    role: "Current Day",
    company: "Arms Races",
    location: "Present Day",
    content:
      "Aliquam leo arcu, semper vel iaculis sed, maximus eu neque. Maecenas mollis est non ante vehicula commodo. Nullam feugiat tellus augue. "
  }
];

// Learning how to use useLayoutEffect
// https://kentcdodds.com/blog/useeffect-vs-uselayouteffect
// https://reactjs.org/docs/hooks-reference.html#uselayouteffect
// https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
const isBrowser = typeof window !== `undefined`;

const getScrollPosition = ({ element, useWindow }) => {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
};

const useScrollPosition = (effect, deps, element, useWindow, wait) => {
  const position = React.useRef(getScrollPosition({ useWindow }));

  let throttleTimeout = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  React.useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    // add for reflow or reposition on resize or scroll
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, deps);
};

// Event Item
const EventItem = (props) => {
  const timeItem = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);

  const checkElement = (el) => {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  React.useEffect(() => {
    setIsVisible(checkElement(timeItem.current));
  }, []);

  useScrollPosition(({ currPos }) => {
    setIsVisible(checkElement(timeItem.current));
  });
  const { date, content, role, company, location } = props;
  return (
    <li ref={timeItem} className={isVisible ? "inView" : null}>
      <div>
        <time>
          {date.from} - {date.to}
        </time>
        <h4 className="title">{role}</h4>
        <h3 className="company">{company}</h3>
        <p>
          <i>{location}</i>
        </p>
        <p className="description">{content}</p>
      </div>
    </li>
  );
};

// Timeline
const Timeline = (props) => {
  const scrollArea = React.useRef();

  const makeTimeline = (events) => {
  
      return (
        <><EventItem
          date={"1"}
          content={"2"}
          role={"3"}
          company={"4"}
          location={"5"}
          key={`6`} /><EventItem
            date={"1"}
            content={"2"}
            role={"3"}
            company={"4"}
            location={"5"}
            key={`6`} /><EventItem
            date={"1"}
            content={"2"}
            role={"3"}
            company={"4"}
            location={"5"}
            key={`6`} /><EventItem
            date={"1"}
            content={"2"}
            role={"3"}
            company={"4"}
            location={"5"}
            key={`6`} /><EventItem
            date={"1"}
            content={"2"}
            role={"3"}
            company={"4"}
            location={"5"}
            key={`6`} /><EventItem
            date={"1"}
            content={"2"}
            role={"3"}
            company={"4"}
            location={"5"}
            key={`6`} /><EventItem
            date={"1"}
            content={"2"}
            role={"3"}
            company={"4"}
            location={"5"}
            key={`6`} /><EventItem
            date={"1"}
            content={"2"}
            role={"3"}
            company={"4"}
            location={"5"}
            key={`6`} /></>

      );

  };

  return (
    <div className="wrapper" ref={scrollArea}>
      <section className="header">
        <div className="container">
          <h1>Atomic Discoveries</h1>
          <p>Timeline of discoveries though the Atomic Age</p>
        </div>
      </section>

      <section className="timeline">
        <ul>{makeTimeline(events)}</ul>
      </section>
    </div>
  );
};
export default Timeline;