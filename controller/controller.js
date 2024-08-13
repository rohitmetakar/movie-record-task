  const customerDb = require('../db/db');
  
  let controller = {
  
      createApi: async function (req, res) {
          try {
              let { name, img, summary } = req.body
              let inserdata = await customerDb._inserData(name, img, summary)
              console.log(inserdata)
              return res.status(200).json({ message: "insert moveies name" });
          } catch (error) {
              return res.status(500).json({ error: error.message });
          }
      },
  
      getMoveiData: async function (req, res) {
          try {
              let getAlldata = await customerDb.getdata()
              return res.status(200).json({ message: "insert moveies name", getAlldata })
  
          } catch (error) {
              return res.status(500).json({ error: error.message });
          }
      },
  
      updateMovie: async function (req, res) {
          try {
              let { id } = req.params || req.query;
              let { name, img, summary } = req.body
              let updateMovie = await customerDb._updateMovie(id, name, img, summary)
              return res.status(200).json({ message: "insert moveies name" })
          } catch (error) {
              return res.status(500).json({ error: error.message });
          }
      },
  
      deleteMovie: async function (req, res) {
          try {
              let { id } = req.params || req.query;
              let deleteMovie = await customerDb._deleteMovie(id)
              return res.status(200).json({ message: "delete moveies" })
          } catch (error) {
              return res.status(500).json({ error: error.message });
          }
      },
  
      getMovie : async function(req, res){
          try {
              let { id } = req.params || req.query;
              let getMovie = await customerDb._getMovie(id)
              return res.status(200).json({ message: "delete moveies" , getMovie})
          } catch (error) {
              
          }
      } 
  
  }
  
  
  module.exports = controller