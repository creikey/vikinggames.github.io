.PHONY: clean

main:
	bundle exec jekyll build

serve:
	bundle exec jekyll serve --watch

autogen:
	bundle exec jekyll build --watch

clean: 
	-rm -r .sass_cache/
	-rm -r _site/*
