# HEIC file converter

Convert your [`.heic`](https://en.wikipedia.org/wiki/High_Efficiency_Image_File_Format) files to `.jpg` or `.png`.

## Running the app

Clone repo and
```
yarn install
yarn start
```

## The converter
The underlying package that does the converting is [heic2any](https://github.com/alexcorvi/heic2any).

**Due to the nature of this package, metadata will be lost during the conversion.**

### To-do
- [x] upload
- [x] convert
- [x] download converted file
- [x] css
- [x] allow user to change type of converted file
- [ ] allow user to change quality
- [x] check user input for heic files
- [ ] favicon
- [x] clean up unused boilerplate
- [x] use button to initiate conversion
- [ ] host demo
