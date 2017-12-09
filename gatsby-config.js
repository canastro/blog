module.exports = {
    siteMetadata: {
        title: 'What About This?',
        author: 'Ricardo Canastro',
        description: 'A blog!',
        siteUrl: 'https://canastro.github.io/blog/'
    },
    pathPrefix: '/blog',
    plugins: [
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-110924562-1',
                anonymize: true
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'What About This?',
                short_name: 'WAT?',
                start_url: '/blog/',
                background_color: '#f7f0eb',
                theme_color: '#a2466c',
                display: 'minimal-ui',
                icons: [
                    {
                        // Everything in /static will be copied to an equivalent
                        // directory in /public during development and build, so
                        // assuming your favicons are in /static/favicons,
                        // you can reference them here
                        src: '/favicons/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/favicons/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590,
                            sizeByPixelDensity: true
                        }
                    },
                    {
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1.0725rem'
                        }
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants'
                ]
            }
        },
        'gatsby-plugin-sitemap',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-feed',
        {
            resolve: 'gatsby-plugin-offline',
            options: {
                staticFileGlobs: [
                    `${__dirname}/**/*.{js,woff2}`,
                    `${__dirname}/index.html`,
                    `${__dirname}/manifest.json`
                ],
                stripPrefix: __dirname
            }
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography'
            }
        }
    ]
};
