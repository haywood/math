MARKDOWN := pandoc --standalone --from markdown_github --to html --mathjax="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"

all: html

html: $(patsubst %.md,%.html,$(wildcard *.md))

clean:
	rm $(patsubst %.md,%.html,$(wildcard *.md))

%.html: %.md
	$(MARKDOWN) $< --output $@
