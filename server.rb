require "sinatra"

set :port, 1122

get '/' do 
    send_file './public/index.html'
end