// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="index.html">Introduction</a></li><li class="chapter-item affix "><a href="Before-you-begin.html">Before you begin</a></li><li class="chapter-item affix "><a href="Preamble.html">Preamble</a></li><li class="chapter-item affix "><li class="part-title">Absolute Beginner</li><li class="chapter-item "><a href="Lesson1.html">Lesson 1: Topic–comment and basic word order</a></li><li class="chapter-item "><a href="Lesson2.html">Lesson 2: State and identity with and without “là”</a></li><li class="chapter-item "><a href="Lesson3.html">Lesson 3: Nouns and bare nouns</a></li><li class="chapter-item "><a href="Lesson4.html">Lesson 4: Verbs (no conjugation)</a></li><li class="chapter-item "><a href="Lesson5.html">Lesson 5: Adjectives as stative verbs</a></li><li class="chapter-item "><a href="Lesson6.html">Lesson 6: Modifying nouns with adjectives and verb phrases</a></li><li class="chapter-item "><a href="Lesson7.html">Lesson 7: Possession with “của” and noun–noun structures</a></li><li class="chapter-item affix "><li class="part-title">Getting Started</li><li class="chapter-item "><a href="Lesson8.html">Lesson 8: Existence with “có” and “không có”</a></li><li class="chapter-item "><a href="Lesson9.html">Lesson 9: Location with “ở”</a></li><li class="chapter-item "><a href="Lesson10.html">Lesson 10: Basic negation with “không”, “chưa”, “chẳng”</a></li><li class="chapter-item "><a href="Lesson11.html">Lesson 11: Yes–no questions</a></li><li class="chapter-item "><a href="Lesson12.html">Lesson 12: Question words and placement</a></li><li class="chapter-item "><a href="Lesson13.html">Lesson 13: Sentence-final particles (à, hả, nhé, nhỉ, ạ, etc.)</a></li><li class="chapter-item affix "><li class="part-title">Getting Going</li><li class="chapter-item "><a href="Lesson14.html">Lesson 14: Time words and time placement</a></li><li class="chapter-item "><a href="Lesson15.html">Lesson 15: Aspect markers: đã, đang, sẽ, rồi, từng</a></li><li class="chapter-item "><a href="Lesson16.html">Lesson 16: Completed vs ongoing actions</a></li><li class="chapter-item "><a href="Lesson17.html">Lesson 17: Serial verb constructions (đi mua ăn, làm xong đi ngủ)</a></li><li class="chapter-item "><a href="Lesson18.html">Lesson 18: Result verbs and complements</a></li><li class="chapter-item "><a href="Lesson19.html">Lesson 19: Adverbs and adverb placement</a></li><li class="chapter-item "><a href="Lesson20.html">Lesson 20: Degree words (rất, khá, hơi, quá, lắm)</a></li><li class="chapter-item "><a href="Lesson21.html">Lesson 21: Comparison with “hơn”, “bằng”, “nhất”</a></li><li class="chapter-item "><a href="Lesson22.html">Lesson 22: Equality and difference</a></li><li class="chapter-item affix "><li class="part-title">Growing our Sentences</li><li class="chapter-item "><a href="Lesson23.html">Lesson 23: Direction and movement verbs</a></li><li class="chapter-item "><a href="Lesson24.html">Lesson 24: Arrival, departure, and destination</a></li><li class="chapter-item "><a href="Lesson25.html">Lesson 25: Giving and receiving (cho, đưa, nhận)</a></li><li class="chapter-item "><a href="Lesson26.html">Lesson 26: Benefactive constructions (làm cho ai)</a></li><li class="chapter-item "><a href="Lesson27.html">Lesson 27: Ability with “có thể”, “biết”</a></li><li class="chapter-item "><a href="Lesson28.html">Lesson 28: Permission and prohibition (được, không được)</a></li><li class="chapter-item "><a href="Lesson29.html">Lesson 29: Obligation and necessity (phải, cần, nên)</a></li><li class="chapter-item "><a href="Lesson30.html">Lesson 30: Wanting and intending (muốn, định)</a></li><li class="chapter-item affix "><li class="part-title">Advanced Flow</li><li class="chapter-item "><a href="Lesson31.html">Lesson 31: Linking clauses with “và”, “nhưng”, “hoặc”</a></li><li class="chapter-item "><a href="Lesson32.html">Lesson 32: Cause and reason (vì, tại, do)</a></li><li class="chapter-item "><a href="Lesson33.html">Lesson 33: Result and consequence (nên, cho nên, thành ra)</a></li><li class="chapter-item "><a href="Lesson34.html">Lesson 34: Condition with “nếu”</a></li><li class="chapter-item "><a href="Lesson35.html">Lesson 35: Purpose with “để”</a></li><li class="chapter-item "><a href="Lesson36.html">Lesson 36: Lists and enumeration</a></li><li class="chapter-item "><a href="Lesson37.html">Lesson 37: Contrast and adversatives (nhưng, tuy nhiên, mà)</a></li><li class="chapter-item "><a href="Lesson38.html">Lesson 38: Concurrence and simultaneity</a></li><li class="chapter-item "><a href="Lesson39.html">Lesson 39: Relative-clause-like noun modification</a></li><li class="chapter-item "><a href="Lesson40.html">Lesson 40: Emphasis and fronting</a></li><li class="chapter-item "><a href="Lesson41.html">Lesson 41: Counting and classifiers</a></li><li class="chapter-item "><a href="Lesson42.html">Lesson 42: Quantifiers (mỗi, mọi, vài, nhiều)</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
